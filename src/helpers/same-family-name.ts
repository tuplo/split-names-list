import type { ILocale } from "../split-names-list.d";
import { splitByConjunction } from "./split-by-conjunction";

function isSingleName(name: string) {
	return !/ /.test(name);
}

function getFamilyName(name: string) {
	const [, familyName] = /\s(.+)/.exec(name) || [];
	return familyName;
}

interface ISameFamilyNameOptions {
	locale?: ILocale;
}

export function sameFamilyName(
	input: string,
	options?: ISameFamilyNameOptions
) {
	const { locale = "en" } = options || {};
	const names = splitByConjunction(input, { locale });

	if (names.length === 1) return input;
	if (!isSingleName(names[0])) return input;
	names[0] += ` ${getFamilyName(names[1])}`;

	return names;
}
