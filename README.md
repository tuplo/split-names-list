# split-names-list

Splits a list of people's names.

<p>
  <img src="https://img.shields.io/npm/v/@tuplo/split-names-list">
  <a href="https://codeclimate.com/github/tuplo/split-names-list/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/be6d4e8edea51867d862/maintainability" />
  </a>
  <a href="https://codeclimate.com/github/tuplo/split-names-list/test_coverage">
    <img src="https://api.codeclimate.com/v1/badges/be6d4e8edea51867d862/test_coverage" />
  </a>
  <img src="https://github.com/tuplo/split-names-list/workflows/Build/badge.svg">
  <img src="https://david-dm.org/tuplo/split-names-list.svg">
</p>

## Usage

Splits a string with a list of names into an array of names.

```typescript
import splitNamesList from '@tuplo/split-names-list';

const names = splitNamesList(
  'Jane Smith, Jill Jones, Jr., Juliet Doe, III, Ms. Jenna Doe and Juliette Doe-Person'
);

/*
[
  'Jane Smith',
  'Jill Jones, Jr.',
  'Juliet Doe, III',
  'Ms. Jenna Doe',
  'Juliette Doe-Person'
]
*/
```

**Different delimiters**

```typescript
splitNamesList('Jane Smith, Jill Jones');
splitNamesList('Jane Smith & Jill Jones');
splitNamesList('Jane Smith • Jill Jones');
splitNamesList('Jane Smith and Jill Jones');

// all → ['Jane Smith', 'Jill Jones']
```

**Complex names**

```typescript
splitNamesList('Jane R. Doe, Jill Dow-Jones'); // → ['Jane R. Doe', 'Jill Dow-Jones']
splitNamesList('Jane Doe, Jr., Jill Doe, Sr.'); // → ['Jane Doe, Jr.', 'Jill Doe, Sr.']
splitNamesList('Jane Doe, III, Jill Doe, Phd'); // → ['Jane Doe, III', 'Jill Doe, Phd']
splitNamesList('Ms. Jane Doe, Jill Doe, PhD'); // → ['Ms. Jane Doe', 'Jill Doe, PhD']
```

**Same family names**

```typescript
splitNamesList('Jane and Jill Doe'); // → ['Jane Doe', 'Jill Doe']
splitNamesList('Jane and Jill Doe-Person'); // → ['Jane Doe-Person', 'Jill Doe-Person']
```

**Configurable locale**

```typescript
splitNamesList('Jane Smith and Jill Jones', { locale: 'en' });
splitNamesList('Jane Smith y Jill Jones', { locale: 'es' });
splitNamesList('Jane Smith et Jill Jones', { locale: 'fr' });
splitNamesList('Jane Smith und Jill Jones', { locale: 'de' });
splitNamesList('Jane Smith e Jill Jones', { locale: 'it' });

// all → ['Jane Smith', 'Jill Jones']
```

## Install

```bash
$ npm install @tuplo/split-names-list

# or with yarn
$ yarn add @tuplo/split-names-list
```

### Contribute

Contributions are always welcome!

### License

> The MIT License (MIT)
>
> Copyright (c) 2020 - 2021 Tuplo.
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.
