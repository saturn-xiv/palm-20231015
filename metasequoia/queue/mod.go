package queue

import (
	"github.com/google/uuid"
	"google.golang.org/protobuf/proto"
)

var (
	CONTENT_TYPE_PROTOBUF = "application/x-protobuf"
)

type Consumer interface {
	Handle(id string, content_type string, body []byte) error
}

type Message struct {
	Id          string
	ContentType string
	Body        []byte
}

func NewProtobufMessage(msg proto.Message) (*Message, error) {
	body, err := proto.Marshal(msg)
	if err != nil {
		return nil, err
	}
	return &Message{
		Id:          uuid.New().String(),
		ContentType: CONTENT_TYPE_PROTOBUF,
		Body:        body,
	}, nil
}
