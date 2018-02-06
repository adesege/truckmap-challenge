import { isValidNumber, parse } from 'libphonenumber-js';
import EmailValidator from 'email-validator';
import { some } from 'lodash';

let validators = {};

validators.email = (email) => {
  return EmailValidator.validate(email);
}

validators.phone = (phone) => {
  return some(['US', 'CA'], (country) => {
    const parsed = parse(phone, {country: {default: country}});
    return isValidNumber(parsed);
  });
}

validators.minLength = (len) => (text) => {
  return text.length >= len;
}

validators.maxLength = (len) => (text) => {
  return text.length <= len;
}

export default validators;