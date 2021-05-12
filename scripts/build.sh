#!/usr/bin/env bash

rimraf dist
tsc --build tsconfig.build.json
esbuild src/index.ts --bundle --format=esm --outfile=dist/index.js
cp src/split-names-list.d.ts dist/split-names-list.d.ts
