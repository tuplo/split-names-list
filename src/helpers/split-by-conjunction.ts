import type { Locale } from '../split-names-list.d';
import conjunctionsPerLocale from './conjunctions';

type SplitByConjunctionOptions = Partial<{
  locale: Locale;
}>;

type SplitByConjunctionFn = (
  input: string,
  options?: SplitByConjunctionOptions
) => string[];

const splitByConjunction: SplitByConjunctionFn = (input, options) => {
  const { locale = 'en' } = options || {};
  const conjunctions = conjunctionsPerLocale(locale);
  if (!conjunctions) throw new Error(`Locale "${locale}" not supported`);

  const rgConjunctions = new RegExp(
    conjunctions.map((conjunction) => `\\b${conjunction}\\b`).join('|'),
    'i'
  );
  return input.split(rgConjunctions).map((part) => part.trim());
};

export default splitByConjunction;
