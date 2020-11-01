import type { Locale } from './split-names-list.d';
import splitByConjunction from './helpers/split-by-conjunction';
import joinSuffixes from './helpers/join-suffixes';
import sameFamilyName from './helpers/same-family-name';

type SplitNamesListOptions = Partial<{
  locale: Locale;
}>;

type SplitNamesListFn = (
  input: string,
  options?: SplitNamesListOptions
) => string[];

const splitNamesList: SplitNamesListFn = (input, options) => {
  const { locale = 'en' } = options || {};

  const names = input
    .split(/[^0-9a-z-. ]/i)
    .map((part) => part.trim())
    .filter(Boolean)
    .flatMap((part) => sameFamilyName(part, { locale }))
    .flatMap((part) => splitByConjunction(part, { locale }))
    .map((part) => part.replace(/\s+/, ' '));

  return [joinSuffixes].reduce((acc, fn) => fn(acc), names);
};

export default splitNamesList;
