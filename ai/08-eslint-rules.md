# ESLint Rules Reference

This document explains each ESLint rule configured in `.eslintrc.js`.

## Base config
- `extends: '@react-native'`
  - Uses React Native's recommended baseline lint setup.

## Project rules
- `arrow-body-style: ['error', 'as-needed']`
  - Enforces concise arrow bodies when `return` is unnecessary.

- `prefer-arrow-callback: ['error', { allowNamedFunctions: false, allowUnboundThis: true }]`
  - Requires arrow functions in callbacks.
  - Keeps callback style consistent and reduces `this` confusion.

- `func-style: ['error', 'expression', { allowArrowFunctions: true }]`
  - Enforces function expressions instead of function declarations.
  - In practice, this pushes the codebase toward arrow-function style.

- `react/function-component-definition: ['error', { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }]`
  - Requires React components to be declared as arrow functions.

- `no-var: 'error'`
  - Disallows `var`; use `let` or `const`.

- `prefer-const: 'error'`
  - Requires `const` when variables are not reassigned.

- `no-duplicate-imports: 'error'`
  - Disallows duplicated import declarations from the same module.

- `sort-imports: ['error', { ... }]`
  - Enforces import ordering.
  - Sorts import declarations and imported members alphabetically.
  - Keeps member syntax order consistent (`none`, `all`, `multiple`, `single`).

- `object-shorthand: ['error', 'always']`
  - Enforces object shorthand syntax.
  - Example: `{ value }` instead of `{ value: value }`.

- `no-console: ['warn', { allow: ['warn', 'error'] }]`
  - Warns on console usage, except `console.warn` and `console.error`.

- `no-unused-vars: 'off'`
  - Disabled in favor of the TypeScript-aware rule below.

- `@typescript-eslint/no-unused-vars: ['error', { argsIgnorePattern: '^_' }]`
  - Errors on unused variables with TypeScript support.
  - Function args prefixed with `_` are ignored by design.

## Maintenance rule
Whenever `.eslintrc.js` changes, update this file in the same change to keep documentation synchronized.
This update is mandatory for any `.eslintrc.js` change.

## Execution rule
After any code change, run ESLint with auto-fix for the whole project:
`npx eslint . --ext .js,.jsx,.ts,.tsx --fix`
