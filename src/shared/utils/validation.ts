export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const isValidEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email.trim());
};

export const isNonEmptyString = (value: unknown): value is string => {
  return typeof value === 'string' && value.trim().length > 0;
};

export const sanitizeString = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

export const validateRequired = (value: unknown, fieldName: string): string | undefined => {
  if (!isNonEmptyString(value)) {
    return `${fieldName} is required`;
  }
  return undefined;
};

export const validateEmail = (email: string): string | undefined => {
  const required = validateRequired(email, 'Email');
  if (required) return required;
  
  if (!isValidEmail(email)) {
    return 'Please enter a valid email address';
  }
  
  return undefined;
};