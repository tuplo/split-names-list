#!/usr/bin/env bash

rimraf dist
microbundle \
  --target node \
  --sourcemap false \
  --format cjs,modern \
  --tsconfig tsconfig.build.json
cp src/split-names-list.d.ts dist/split-names-list.d.ts
