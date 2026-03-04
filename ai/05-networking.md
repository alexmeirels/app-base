# Networking and API

## Main rule
All HTTP calls must originate from `src/services/api.ts` or from feature wrappers that depend on it.
All new HTTP requests must use `axios`.

## Guidelines
- Do not call `fetch` directly from screens or presentational components.
- Centralize error handling and serialization at the service layer.
- Type requests and responses.
- Prefer a shared configured axios instance in `src/services/api.ts`.
