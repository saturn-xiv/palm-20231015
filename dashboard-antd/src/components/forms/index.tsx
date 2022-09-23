export const RULE_EMAIL = {
  required: true,
  // FIXME type: "email",
  max: 255,
  min: 5,
};
export const RULE_EMAIL_TYPE = {};
export const RULE_PASSWORD = { required: true, min: 6, max: 32 };
export const RULE_CODE = {
  required: true,
  pattern: new RegExp("^[a-zA-Z][a-zA-Z0-9_\\.-]{1,254}$"),
};
// https://en.wikipedia.org/wiki/List_of_Unicode_characters
export const RULE_NAME = {
  required: true,
  min: 2,
  max: 255,
};
