import { isSuffix, joinSuffixes } from "./join-suffixes";

describe("join suffixes", () => {
	it.each([
		["Jane", false],
		["Junior", true],
		["Jr.", true],
		["Phd", true],
	])("identifies suffixes - %s", (name, expected) => {
		const result = isSuffix(name);
		expect(result).toBe(expected);
	});

	it.each([
		["no suffixes", ["Jane Doe", "Jill Doe"], ["Jane Doe", "Jill Doe"]],
		["junior", ["Jane Doe", "Jr.", "Jill Doe"], ["Jane Doe, Jr.", "Jill Doe"]],
	])("join suffixes - %s", (_, names, expected) => {
		const result = joinSuffixes(names);
		expect(result).toStrictEqual(expected);
	});
});
