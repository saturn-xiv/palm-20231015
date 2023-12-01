package env

import (
	"errors"
	"os"

	"github.com/tink-crypto/tink-go/v2/keyset"
	tinkpb "github.com/tink-crypto/tink-go/v2/proto/tink_go_proto"
	"github.com/tink-crypto/tink-go/v2/tink"
)

func restore_key(name string, secret tink.AEAD) (*keyset.Handle, error) {
	file, err := os.Open(name)
	if err != nil {
		return nil, err
	}
	reader := keyset.NewBinaryReader(file)
	handle, err := keyset.Read(reader, secret)
	if err != nil {
		return nil, err
	}
	return handle, nil
}

func dump_key(name string, secret tink.AEAD, key *tinkpb.KeyTemplate) error {
	ks, err := keyset.NewHandle(key)
	if err != nil {
		return err
	}

	if _, err := os.Stat(name); err == nil {
		return errors.New("key " + name + " already exists")
	}
	file, err := os.Create(name)
	if err != nil {
		return err
	}
	defer file.Close()
	writer := keyset.NewBinaryWriter(file)
	if err = ks.Write(writer, secret); err != nil {
		return err
	}
	if err = os.Chmod(name, 0400); err != nil {
		return err
	}
	return nil
}
