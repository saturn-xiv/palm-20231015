package env

import (
	"time"

	"github.com/tink-crypto/tink-go/v2/jwt"
	"github.com/tink-crypto/tink-go/v2/tink"
)

type Jwt struct {
	mac jwt.MAC
}

func (p *Jwt) Verify(token string, issuer string, audience string) (string, map[string]interface{}, error) {
	validator, err := jwt.NewValidator(&jwt.ValidatorOpts{
		ExpectedAudience: &audience,
		ExpectedIssuer:   &issuer,
	})
	if err != nil {
		return "", nil, err
	}
	verified_jwt, err := p.mac.VerifyMACAndDecode(token, validator)
	if err != nil {
		return "", nil, err
	}

	subject, err := verified_jwt.Subject()
	if err != nil {
		return "", nil, err
	}
	if !verified_jwt.HasStringClaim("custom") {
		return subject, nil, nil
	}
	claim, err := verified_jwt.ObjectClaim("custom")
	if err != nil {
		return "", nil, err
	}
	return subject, claim, nil
}

func (p *Jwt) Sign(issuer string, subject string, audience string, claims map[string]interface{}, ttl time.Duration) (string, error) {
	now := time.Now()
	exp := now.Add(ttl)

	raw, err := jwt.NewRawJWT(&jwt.RawJWTOptions{
		Audience:     &audience,
		Subject:      &subject,
		CustomClaims: claims,
		ExpiresAt:    &exp,
		NotBefore:    &now,
		Issuer:       &issuer,
		IssuedAt:     &now,
	})
	if err != nil {
		return "", err
	}
	return p.mac.ComputeMACAndEncode(raw)
}

func newJwt(file string, secret tink.AEAD) (*Jwt, error) {
	handle, err := restore_key(file, secret)
	if err != nil {
		return nil, err
	}
	mac, err := jwt.NewMAC(handle)
	if err != nil {
		return nil, err
	}
	return &Jwt{
		mac: mac,
	}, nil
}
