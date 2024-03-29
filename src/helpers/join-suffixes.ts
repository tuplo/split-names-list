const suffixes = [
	"i",
	"ii",
	"iii",
	"iv",
	"v",
	"senior",
	"junior",
	"jr",
	"sr",
	"phd",
	"apr",
	"rph",
	"pe",
	"md",
	"ma",
	"dmd",
	"cme",
	"qc",
	"kc",
];

export function isSuffix(input: string) {
	const str = input.replace(/\./g, "");
	const rg = new RegExp(suffixes.map((suffix) => `^${suffix}$`).join("|"), "i");
	return rg.test(str);
}

export function joinSuffixes(names: string[]) {
	return names
		.map((name) => name.trim())
		.filter(Boolean)
		.reduce((acc, name, i, list) => {
			if (isSuffix(name)) return acc;

			const newAcc: string[] = acc.slice();
			if (list[i + 1] && isSuffix(list[i + 1])) {
				newAcc.push([name, list[i + 1]].join(", "));
			} else {
				newAcc.push(name);
			}

			return newAcc;
		}, [] as string[]);
}
