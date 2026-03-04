# Formatting and Prettier Standard

## Main rule
All generated or edited code must follow the project's Prettier configuration in `.prettierrc.js`.

## Required formatting settings
- `printWidth: 100`
- `tabWidth: 2`
- `useTabs: false`
- `semi: true`
- `arrowParens: 'avoid'`
- `bracketSpacing: true`
- `bracketSameLine: false`
- `singleQuote: true`
- `jsxSingleQuote: true`
- `trailingComma: 'all'`
- `endOfLine: 'lf'`

## Agent behavior
- Before finalizing significant code changes, ensure formatting is consistent with Prettier rules.
- Do not introduce formatting that conflicts with `.prettierrc.js`.
- Whenever `.prettierrc.js` is changed, this file (`ai/07-formatting-prettier.md`) must be updated in the same change to keep rules synchronized.
