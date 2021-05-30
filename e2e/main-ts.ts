import { strict as assert } from 'assert';
import splitNamesList from '@tuplo/split-names-list';

const result = splitNamesList(
  'Jane Smith, Jill Jones, Jr., Juliet Doe, III, Ms. Jenna Doe and Juliette Doe-Person'
);

export const testSplitNamesList = splitNamesList;

assert.deepEqual(result, [
  'Jane Smith',
  'Jill Jones, Jr.',
  'Juliet Doe, III',
  'Ms. Jenna Doe',
  'Juliette Doe-Person',
]);
