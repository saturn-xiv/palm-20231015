package env

import (
	"github.com/tink-crypto/tink-go/v2/aead"
	"github.com/tink-crypto/tink-go/v2/tink"
)

type Aes struct {
	aead tink.AEAD
}

func (p *Aes) Encrypt(plain []byte) ([]byte, []byte, error) {
	salt := RandomBytes(32)
	code, err := p.aead.Encrypt(plain, salt)
	if err != nil {
		return nil, nil, err
	}
	return code, salt, err
}

func (p *Aes) Decrypt(code []byte, salt []byte) ([]byte, error) {

	return p.aead.Decrypt(code, salt)
}

func newAes(file string, secret tink.AEAD) (*Aes, error) {
	handle, err := restore_key(file, secret)
	if err != nil {
		return nil, err
	}
	aead, err := aead.New(handle)
	if err != nil {
		return nil, err
	}
	return &Aes{aead: aead}, nil
}
