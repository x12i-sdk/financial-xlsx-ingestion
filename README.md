# @x12i/financial-xlsx-ingestion usage example

Convert XLSX workbooks into canonical financial datasets with a closed mapping language.

This consuming application demonstrates **create and inspect a synthetic workbook entirely in memory** using the published npm package, pinned to `2.0.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Inspect an XLSX workbook and preview a declared mapping into canonical financial records.
- Reject unsupported formulas or mappings before committing a converted dataset.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/financial-xlsx-ingestion)
- [Implementation monorepo](https://github.com/x12i/finanfix)
- [Reviewed package source](https://github.com/x12i/finanfix/tree/8630e4c4f201deb35cd10c3790c9d5abdbce4633/packages/xlsx-ingestion)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
