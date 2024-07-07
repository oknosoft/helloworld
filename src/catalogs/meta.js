
import {classes as currenciesClasses, meta as currencies, exclude as currenciesExclude} from './currencies';
import {meta as raw} from './raw';

export const meta = {
  currencies,
  ...raw,
};

export const exclude = [...currenciesExclude];

export const classes = [
  currenciesClasses,
];
