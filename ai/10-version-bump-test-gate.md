# Version Bump Test Gate

## Main rule
Before any semantic version increment from commit message automation, tests must pass.

## Required checks (in order)
1. Unit tests:
   - `npm test -- --runInBand`
2. End-to-end tests (Detox iOS headless):
   - `npm run e2e:test:ios:headless`

## Blocking behavior
- If unit tests fail, version bump must be aborted.
- If end-to-end tests fail, version bump must be aborted.
- If any required check fails, `package.json` and `app.json` versions must remain unchanged.

## Scope
This gate is required for automatic version increments triggered by commit message processing.
