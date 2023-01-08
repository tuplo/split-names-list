import "zx/globals";

async function main() {
	await $`rm -rf dist`;
	await $`rm -rf cjs`;
	await $`tsc --build tsconfig.build.json`;

	await $`esbuild src/index.ts --bundle --platform=node --format=cjs --outfile=dist/index.cjs`;
	await $`esbuild src/index.ts --bundle --platform=node --format=esm --outfile=dist/index.mjs`;

	await $`cp src/split-names-list.d.ts dist`;
}

main();
