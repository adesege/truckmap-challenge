import pluralize from './pluralize';

export function formatNumber(number) {
  if(!number.toString) return '';
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export function pluralNumber(number, label) {
  return `${number} ${pluralize(label, number)}`;
}

export function removeTrailingSlash(str) {
  return str.replace(/\/$/, '');
}