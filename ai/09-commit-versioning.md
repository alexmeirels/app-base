# Commit Message and Semantic Versioning

## Main rule
All commits must follow the Conventional Commits format:
`type(scope): description`

## Allowed commit types
- `feat`: new feature
- `fix`: bug fix
- `perf`: performance improvement
- `refactor`: internal code change without behavior change
- `docs`: documentation only
- `test`: tests only
- `style`: style/formatting only
- `chore`: maintenance tasks
- `build`: build/dependency changes
- `ci`: CI/CD changes

## Semantic version mapping
- `major` bump:
  - Commit contains `!` after type/scope (example: `feat(auth)!: ...`)
  - OR contains `BREAKING CHANGE` in the commit message body
- `minor` bump:
  - `feat(...)` commits without breaking change
- `patch` bump:
  - `fix`, `perf`, `refactor`
- `none` (no version bump):
  - `docs`, `test`, `style`, `chore`, `build`, `ci`

## Automation command
Use this command with the commit message as input:
`npm run version:bump -- "<commit message>"`

Examples:
- `npm run version:bump -- "feat(auth): add social login"` -> `minor`
- `npm run version:bump -- "fix(auth): handle null token"` -> `patch`
- `npm run version:bump -- "feat(auth)!: replace auth protocol"` -> `major`
- `npm run version:bump -- "docs(readme): update setup"` -> `none`

## Files updated by automation
- `package.json` (`version`)
- `app.json` (`version`)

## Commit request rule
Whenever the user asks for a commit message, you must:
- Use this file as the source of truth.
- Return the message in Conventional Commits format:
  - `type(scope): message`
  - Example: `feat(auth): add login validation`
- Decide the correct semantic bump based on this file (or follow the user request when explicitly provided).
- Run the version bump script with the final commit message:
  - `npm run version:bump -- "<final commit message>"`

## Maintenance rule
Whenever commit/version bump automation changes, this file must be updated in the same change.
