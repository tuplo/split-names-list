import type { Locale } from './split-names-list.d';
import splitByConjunction from './helpers/split-by-conjunction';
import joinSuffixes from './helpers/join-suffixes';
import sameFamilyName from './helpers/same-family-name';

type SplitNamesListOptions = Partial<{
  locale: Locale;
}>;

function splitNamesList(
  input?: string | null,
  options?: SplitNamesListOptions
): string[] {
  if (!input) return [];
  if (typeof input !== 'string') return [];

  const { locale = 'en' } = options || {};

  const names = input
    // non alphanumeric, space, dots, accents
    .split(/[^0-9a-z-.’'" \u00C0-\u00FF]/i)
    .map((part) => part.trim())
    .filter(Boolean)
    .flatMap((part) => sameFamilyName(part, { locale }))
    .flatMap((part) => splitByConjunction(part, { locale }))
    .map((part) => part.replace(/\s+/, ' '));

  return [joinSuffixes].reduce((acc, fn) => fn(acc), names);
}

export default splitNamesList;
