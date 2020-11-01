import type { Locale } from '../split-names-list.d';
import sameFamilyName from './same-family-name';

describe('same family name', () => {
  it.each<[string, string, Locale, string | string[]]>([
    ['no conjunction', 'Jane, Jill Dow', 'en', 'Jane, Jill Dow'],
    [
      'not same family name',
      'Jane Doe and Jill Dow',
      'en',
      'Jane Doe and Jill Dow',
    ],
    ['same family', 'Jane and Jill Doe', 'en', ['Jane Doe', 'Jill Doe']],
  ])('joins same family names - %s', (_, input, locale, expected) => {
    const result = sameFamilyName(input, { locale });
    expect(result).toStrictEqual(expected);
  });
});
