import type { Locale } from '../split-names-list.d';
import splitByConjunction from './split-by-conjunction';

describe('split-by-conjunction', () => {
  it.each<[Locale, string, string[]]>([
    ['en', 'Jane Doe and Jill Dow', ['Jane Doe', 'Jill Dow']],
    ['pt', 'Jane Doe e Jill Dow', ['Jane Doe', 'Jill Dow']],
  ])('splits by conjunction - %s', (locale, input, expected) => {
    expect.assertions(1);
    const result = splitByConjunction(input, { locale });
    expect(result).toStrictEqual(expected);
  });

  it("throws if a locale isn't yet supported", () => {
    expect.assertions(1);
    const expected = 'Locale "xx" not supported';
    expect(() =>
      splitByConjunction('Jane Doe', { locale: 'xx' as Locale })
    ).toThrow(expected);
  });
});
