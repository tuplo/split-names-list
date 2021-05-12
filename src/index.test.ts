import type { Locale } from './split-names-list.d';

import splitNamesList from '.';

describe('split names list', () => {
  it.each([
    [undefined, []],
    [null, []],
    [{ foo: 'bar' }, []],
    ['Jane Doe', ['Jane Doe']],
    ['Jane Doe, Jill Doe', ['Jane Doe', 'Jill Doe']],
    ['Jane Doe , Jill Doe', ['Jane Doe', 'Jill Doe']],
    ['Jane  Doe, Jill    Doe', ['Jane Doe', 'Jill Doe']],
    ['   Jane Doe, Jill Doe   ', ['Jane Doe', 'Jill Doe']],
    ['Javier Fernández Vázquez', ['Javier Fernández Vázquez']],
  ])('normal formatted names - %s', (input, expected) => {
    expect.assertions(1);
    const result = splitNamesList(input as string);
    expect(result).toStrictEqual(expected);
  });

  it.each([
    [',', 'Jane Doe, Jill Doe', ['Jane Doe', 'Jill Doe']],
    [';', 'Jane Doe; Jill Doe', ['Jane Doe', 'Jill Doe']],
    ['&', 'Jane Doe & Jill Doe', ['Jane Doe', 'Jill Doe']],
    ['•', 'Jane Doe • Jill Doe', ['Jane Doe', 'Jill Doe']],
    ['/', 'Jane Doe/Jill Doe', ['Jane Doe', 'Jill Doe']],
    ['line break', 'Jane Doe\nJill Doe', ['Jane Doe', 'Jill Doe']],
  ])('different dividers - %s', (_, input, expected) => {
    expect.assertions(1);
    const result = splitNamesList(input);
    expect(result).toStrictEqual(expected);
  });

  it.each([
    ['Jane R. Doe, Jill Doe', ['Jane R. Doe', 'Jill Doe']],
    ['Jane Doe, Jill R. Doe', ['Jane Doe', 'Jill R. Doe']],
    ['Jane Doe-Person, Jill Dow-Pow', ['Jane Doe-Person', 'Jill Dow-Pow']],
    ['Jane Doe, Jr., Jill Doe, Jr.', ['Jane Doe, Jr.', 'Jill Doe, Jr.']],
    ['Jane Doe, III, Jill Doe, V', ['Jane Doe, III', 'Jill Doe, V']],
  ])('complex names - %s', (input, expected) => {
    expect.assertions(1);
    const result = splitNamesList(input);
    expect(result).toStrictEqual(expected);
  });

  it.each<[string, Locale, string[]]>([
    ['Jane Doe and Jill Dow', 'en', ['Jane Doe', 'Jill Dow']],
    [
      'Jane Doe, Jill Dow and Julia Down',
      'en',
      ['Jane Doe', 'Jill Dow', 'Julia Down'],
    ],
  ])('words as dividers - %s', (input, locale, expected) => {
    expect.assertions(1);
    const result = splitNamesList(input, { locale });
    expect(result).toStrictEqual(expected);
  });

  it.each([
    ['Jane and Jill Doe', ['Jane Doe', 'Jill Doe']],
    ['Jane and Jill Doe, Janet Dow', ['Jane Doe', 'Jill Doe', 'Janet Dow']],
    ['Jane and Jill Doe and Janet Dow', ['Jane Doe', 'Jill Doe', 'Janet Dow']],
  ])('same family names - %s', (input, expected) => {
    expect.assertions(1);
    const result = splitNamesList(input);
    expect(result).toStrictEqual(expected);
  });
});
