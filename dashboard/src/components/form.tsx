export const REAL_NAME_VALIDATOR = [{ required: true, min: 2, max: 32 }];
export const NICK_NAME_VALIDATOR = [
  {
    pattern: /^[\\.a-z0-9_-]+$/i,
  },
  {
    required: true,
    min: 2,
    max: 32,
  },
];
export const CODE_VALIDATOR = [
  {
    pattern: /^[\\.a-z0-9_-]+$/i,
  },
  {
    required: true,
    min: 1,
    max: 255,
  },
];
export const EMAIL_VALIDATOR = [
  {
    pattern: /^[\\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
  },
  {
    required: true,
    min: 6,
    max: 255,
  },
];
export const PASSWORD_VALIDATOR = [
  {
    required: true,
    min: 6,
    max: 64,
  },
];
