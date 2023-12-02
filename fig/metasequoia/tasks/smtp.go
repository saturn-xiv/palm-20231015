package tasks

type EmailConsumer struct{}

func (p *EmailConsumer) Handle(id string, content_type string, body []byte) error {
	// TODO
	return nil
}
