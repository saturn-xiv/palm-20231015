import { Rule } from 'rc-field-form/lib/interface';

export const RULE_EMAIL: Rule = {
  required: true,
  type: 'email',
  max: 255,
  min: 5,
};
export const RULE_PASSWORD: Rule = { required: true, min: 6, max: 32 };
export const RULE_CODE: Rule = {
  required: true,
  pattern: new RegExp('^[a-zA-Z][a-zA-Z0-9_\\.-]{1,254}$'),
};
// https://en.wikipedia.org/wiki/List_of_Unicode_characters
export const RULE_NAME: Rule = {
  required: true,
  min: 2,
  max: 255,
};
