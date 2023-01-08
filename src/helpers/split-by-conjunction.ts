import type { ILocale } from "../split-names-list.d";
import { conjunctionsPerLocale } from "./conjunctions";

interface ISplitByConjunctionOptions {
	locale: ILocale;
}

export function splitByConjunction(
	input: string,
	options?: Partial<ISplitByConjunctionOptions>
) {
	const { locale = "en" } = options || {};
	const conjunctions = conjunctionsPerLocale(locale);
	if (!conjunctions) throw new Error(`Locale "${locale}" not supported`);

	const rgConjunctions = new RegExp(
		conjunctions.map((conjunction) => `\\b${conjunction}\\b`).join("|"),
		"i"
	);

	return input.split(rgConjunctions).map((part) => part.trim());
}
