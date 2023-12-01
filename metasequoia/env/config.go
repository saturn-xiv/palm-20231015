package env

import (
	"errors"
	"fmt"
	"os"

	log "github.com/sirupsen/logrus"
	"github.com/tink-crypto/tink-go/v2/aead"
	"github.com/tink-crypto/tink-go/v2/insecurecleartextkeyset"
	"github.com/tink-crypto/tink-go/v2/jwt"
	"github.com/tink-crypto/tink-go/v2/keyset"
	"github.com/tink-crypto/tink-go/v2/mac"
)

type Config struct {
	// openssl rand -base64 32
	Redis      Redis      `toml:"redis"`
	Postgresql PostgreSql `toml:"postgresql"`
	RabbitMq   RabbitMq   `toml:"rabbitmq"`
}

func (p *Config) OpenSecrets() (*Aes, *HMac, *Jwt, error) {
	master_key_file_name := "master.bin"
	jwt_key_file_name := "jwt.bin"
	hmac_key_file_name := "hmac.bin"
	aes_key_file_name := "aes.bin"
	if _, err := os.Stat(master_key_file_name); errors.Is(err, os.ErrNotExist) {
		master_key, err := keyset.NewHandle(aead.AES256GCMKeyTemplate())
		if err != nil {
			return nil, nil, nil, err
		}
		secret, err := aead.New(master_key)
		if err != nil {
			return nil, nil, nil, err
		}

		log.Warnf("generate a new master key file %s", master_key_file_name)
		{
			file, err := os.Create(master_key_file_name)
			if err != nil {
				return nil, nil, nil, err
			}
			defer file.Close()

			writer := keyset.NewBinaryWriter(file)
			if err = insecurecleartextkeyset.Write(master_key, writer); err != nil {
				return nil, nil, nil, err
			}
			if err = os.Chmod(master_key_file_name, 0400); err != nil {
				return nil, nil, nil, err
			}
		}
		log.Warnf("generate a new aes key file %s", aes_key_file_name)
		if err = dump_key(aes_key_file_name, secret, aead.AES256GCMKeyTemplate()); err != nil {
			return nil, nil, nil, err
		}
		log.Warnf("generate a new hmac key file %s", hmac_key_file_name)
		if err = dump_key(hmac_key_file_name, secret, mac.HMACSHA512Tag512KeyTemplate()); err != nil {
			return nil, nil, nil, err
		}

		log.Warnf("generate a new jwt key file %s", jwt_key_file_name)
		if err = dump_key(jwt_key_file_name, secret, jwt.HS512Template()); err != nil {
			return nil, nil, nil, err
		}

	}
	log.Debugf("load master key from %s", master_key_file_name)
	master_key_file, err := os.Open(master_key_file_name)
	if err != nil {
		return nil, nil, nil, err
	}
	defer master_key_file.Close()

	master_key_file_reader := keyset.NewBinaryReader(master_key_file)
	master_key, err := insecurecleartextkeyset.Read(master_key_file_reader)
	if err != nil {
		return nil, nil, nil, err
	}
	secret, err := aead.New(master_key)
	if err != nil {
		return nil, nil, nil, err
	}

	log.Debugf("load aes key from %s", aes_key_file_name)
	aes, err := newAes(aes_key_file_name, secret)
	if err != nil {
		return nil, nil, nil, err
	}

	log.Debugf("load hmac key from %s", hmac_key_file_name)
	hmac, err := newHMac(hmac_key_file_name, secret)
	if err != nil {
		return nil, nil, nil, err
	}

	log.Debugf("load jwt key from %s", jwt_key_file_name)
	jwt, err := newJwt(jwt_key_file_name, secret)
	if err != nil {
		return nil, nil, nil, err
	}

	return aes, hmac, jwt, nil

}

type PostgreSql struct {
	Host     string `toml:"host"`
	Port     uint16 `toml:"port"`
	DbName   string `toml:"dbname"`
	User     string `toml:"user"`
	Password string `toml:"password"`
}

func (p *PostgreSql) Url() string {
	return fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable TimeZone=UTC",
		p.Host, p.Port, p.User, p.Password, p.DbName,
	)
}

type RabbitMq struct {
	Host        string `toml:"host"`
	Port        uint16 `toml:"port"`
	User        string `toml:"user"`
	Password    string `toml:"password"`
	VirtualHost string `toml:"virtual-host"`
}
