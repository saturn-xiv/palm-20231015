import { RuleType } from 'rc-field-form/lib/interface';

export const CODE_VALIDATOR = {
  required: true,
  pattern: new RegExp(/^[a-zA-Z0-9_-]{2,32}$/),
};
export const NAME_VALIDATOR = { required: true, min: 2, max: 32 };
export const EMAIL_VALIDATOR = { type: 'email' as RuleType, required: true };
export const PASSWORD_VALIDATOR = { required: true, min: 6, max: 32 };
