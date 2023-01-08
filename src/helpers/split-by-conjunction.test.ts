import type { ILocale } from "../split-names-list.d";
import { splitByConjunction } from "./split-by-conjunction";

describe("split-by-conjunction", () => {
	it.each<[ILocale, string, string[]]>([
		["en", "Jane Doe and Jill Dow", ["Jane Doe", "Jill Dow"]],
		["pt", "Jane Doe e Jill Dow", ["Jane Doe", "Jill Dow"]],
	])("splits by conjunction - %s", (locale, input, expected) => {
		const result = splitByConjunction(input, { locale });
		expect(result).toStrictEqual(expected);
	});
});
