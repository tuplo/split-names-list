import type { Locale } from '../split-names-list.d';
import splitByConjunction from './split-by-conjunction';

type IsSingleNameFn = (name: string) => boolean;
const isSingleName: IsSingleNameFn = (name) => !/ /.test(name);

type GetFamilyNameFn = (name: string) => string;
const getFamilyName: GetFamilyNameFn = (name) => {
  const [, familyName] = /\s(.+)/.exec(name) || [];
  return familyName;
};

type SameFamilyNameOptions = Partial<{ locale: Locale }>;

type SameFamilyNameFn = (
  input: string,
  options?: SameFamilyNameOptions
) => string | string[];

const sameFamilyName: SameFamilyNameFn = (input, options) => {
  const { locale = 'en' } = options || {};
  const names = splitByConjunction(input, { locale });

  if (names.length === 1) return input;
  if (!isSingleName(names[0])) return input;
  names[0] += ` ${getFamilyName(names[1])}`;

  return names;
};

export default sameFamilyName;
