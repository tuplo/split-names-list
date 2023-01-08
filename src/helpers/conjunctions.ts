import type { ILocale } from "../split-names-list.d";

export function conjunctionsPerLocale(language: ILocale) {
	const list = ["###", "###"];

	const stringList = new Intl.ListFormat(language, {
		style: "long",
		type: "conjunction",
	}).format(list);

	const conjunction = stringList.replace(/#/g, "").trim();

	return conjunction ? [conjunction] : undefined;
}
