import type { Locale } from '../split-names-list.d';

type ConjunctionsPerLocaleMap = Record<Locale, string[]>;
const conjunctionsPerLocale: ConjunctionsPerLocaleMap = {
  de: ['und'],
  en: ['and'],
  es: ['y'],
  fr: ['et'],
  it: ['e'],
  pt: ['e'],
};

export default conjunctionsPerLocale;
