/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-underscore-dangle */
const digitsRE = /(\d{3})(?=\d)/g;

function currency(value, currency, decimals) {
  value = parseFloat(value);
  if (!isFinite(value) || (!value && value !== 0)) return '';
  currency = currency != null ? currency : '$';
  decimals = decimals != null ? decimals : 2;
  const stringified = Math.abs(value).toFixed(decimals);
  const _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified;
  const i = _int.length % 3;
  const head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : '';
  const _float = decimals
    ? stringified.slice(-1 - decimals)
    : '';
  const sign = value < 0 ? '-' : '';
  return sign + currency + head
    + _int.slice(i).replace(digitsRE, '$1,')
    + _float;
}

export default currency;
