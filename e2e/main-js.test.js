import { testSplitNamesList } from './main-js';

describe('split names list', () => {
  it('is testable with Jest and JavaScript', () => {
    expect.assertions(1);
    const result = testSplitNamesList('Jane Doe, Jill Doe');

    const expected = ['Jane Doe', 'Jill Doe'];
    expect(result).toStrictEqual(expected);
  });
});
