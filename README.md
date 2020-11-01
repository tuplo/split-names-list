# split-names-list

> Splits a list of people's names

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

## Contribute

Contributions are always welcome!

## License

MIT
