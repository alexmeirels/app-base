# Code Rules

## Language
- Use TypeScript for all new code.
- Define explicit types for props and return values when it improves readability.
- Prefer arrow functions as the default for components and functions.

## Styling and UI
- Do not use `StyleSheet` in new components.
- Centralize styles in `styles.tsx` using `styled-components/native`.
- Avoid inline styles.

## Good practices
- Keep components small and focused on a single responsibility.
- Move business logic to hooks/services.
- Use descriptive names for files and symbols.
- Default component file pattern:
  - `index.tsx`
  - `types.ts`
  - `styles.tsx`

## Function declaration standard
- Use arrow functions for:
  - React components
  - Utility functions
  - Handlers and callbacks

## Memoization standard
- All methods in components must be created with `useCallback`.
- Variables/constants with computed values must use `useMemo`.

## Lint enforcement
- After any code change, run ESLint with `--fix` for the entire project.

## Deprecation policy
- Before using any library method/API (for example Jest APIs), verify whether it is deprecated in the installed version.
- If deprecated, replace it with the current recommended API for that version.
