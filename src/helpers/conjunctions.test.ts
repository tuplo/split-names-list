import type { Locale } from '../split-names-list.d';
import conjunctionsPerLocale from './conjunctions';

describe('conjunctions', () => {
  it.each([
    ['en', ['and']],
    ['en-GB', ['and']],
    ['pt', ['e']],
    ['pt-PT', ['e']],
    ['pt-BR', ['e']],
    ['de', ['und']],
    ['es', ['y']],
    ['fr', ['et']],
    ['it', ['e']],
  ])('get conjunction per language: %s', (language, expected) => {
    const result = conjunctionsPerLocale(language as Locale);
    expect(result).toStrictEqual(expected);
  });
});
