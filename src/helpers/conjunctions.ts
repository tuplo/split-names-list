import type { Locale } from '../split-names-list.d';

function conjunctionsPerLocale(language: Locale): string[] | undefined {
  const list = ['###', '###'];

  const stringList = new Intl.ListFormat(language, {
    style: 'long',
    type: 'conjunction',
  }).format(list);

  const conjunction = stringList.replace(/#/g, '').trim();

  return conjunction ? [conjunction] : undefined;
}

export default conjunctionsPerLocale;
