package env

import (
	"crypto/rand"
	"reflect"
)

func RandomBytes(len int) []byte {
	buf := make([]byte, len)
	rand.Read(buf)
	return buf
}

func QueueName(i any) string {
	t := reflect.TypeOf(i)
	return t.PkgPath() + "." + t.Name()
}
