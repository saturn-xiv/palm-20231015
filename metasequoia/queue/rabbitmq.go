package queue

import (
	"context"
	"time"

	amqp "github.com/rabbitmq/amqp091-go"
	log "github.com/sirupsen/logrus"
)

type RabbitMq struct {
	uri string
}

func (p *RabbitMq) Consume(consumer_name string, queue_name string, consumer_handler Consumer) error {
	con, err := amqp.Dial(p.uri)
	if err != nil {
		return err
	}
	defer con.Close()

	ch, err := con.Channel()
	if err != nil {
		return err
	}
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	messages, err := ch.ConsumeWithContext(ctx, queue_name, consumer_name, true, false, false, false, nil)
	if err != nil {
		return err
	}

	for msg := range messages {
		log.Infof("receive message %s@%s", msg.MessageId, msg.ContentType)
		if err = consumer_handler.Handle(msg.MessageId, msg.ContentType, msg.Body); err != nil {
			return err
		}
	}
	return nil
}

func (p *RabbitMq) Produce(queue string, message *Message) error {
	return p.send("", queue, message)
}

func (p *RabbitMq) Publish(exchange string, message *Message) error {
	return p.send(exchange, "", message)
}

func (p *RabbitMq) Bind(exchange_name string, exchange_type string, queue_name string, routing_key string) error {
	con, err := amqp.Dial(p.uri)
	if err != nil {
		return err
	}
	defer con.Close()

	ch, err := con.Channel()
	if err != nil {
		return err
	}
	if err = ch.ExchangeDeclare(exchange_name, exchange_type, true, false, false, false, nil); err != nil {
		return nil
	}

	if _, err = ch.QueueDeclare(queue_name, true, false, false, false, nil); err != nil {
		return err
	}
	if err = ch.QueueBind(queue_name, routing_key, exchange_name, false, nil); err != nil {
		return err
	}
	return nil

}

func (p *RabbitMq) send(exchange string, routing_key string, message *Message) error {
	con, err := amqp.Dial(p.uri)
	if err != nil {
		return err
	}
	defer con.Close()

	ch, err := con.Channel()
	if err != nil {
		return err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	return ch.PublishWithContext(ctx,
		exchange,
		routing_key,
		false,
		false,
		amqp.Publishing{
			ContentType: message.ContentType,
			Body:        message.Body,
			MessageId:   message.Id,
		})

}

func NewRabbitMq(uri string) RabbitMq {
	return RabbitMq{uri: uri}
}
