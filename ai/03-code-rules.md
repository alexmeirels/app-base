# Code Rules

## Language
- Use TypeScript for all new code.
- Define explicit types for props and return values when it improves readability.
- Prefer arrow functions as the default for components and functions.
- Do not use namespace imports (`import * as ...`).

## Styling and UI
- Do not use `StyleSheet` in new components.
- Centralize styles in `styles.tsx` using `styled-components/native`.
- Avoid inline styles.
- When creating components, use theme/design tokens whenever it makes sense (for example colors, spacing, typography, radius, and borders) instead of hardcoded values.

## JSX conditional rendering
- Prefer `condition && <Component />` over `condition ? <Component /> : null` when the false case is “render nothing”.
- Do **not** use `&&` when the left-hand expression can be `0`, `''`, or another falsy value that would render visibly; use an explicit ternary to `null`, `Boolean(x)`, or a strict comparison instead.
- Keep a full ternary when the false branch must render different JSX (`a ? <A /> : <B />`).

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
- Do not use `useCallback`/`useMemo` by default.
- Use `useCallback` only when there is a clear benefit, such as:
  - Passing callbacks to memoized children.
  - Stabilizing dependencies in effects/hooks.
  - Avoiding unnecessary re-renders in granular interactions.
- Use `useMemo` only when there is a clear benefit, such as:
  - Avoiding expensive recalculations.
  - Stabilizing derived values used as dependencies.
- Prefer simple, readable code over premature memoization.

## Lint enforcement
- After any code change, run ESLint with `--fix` for the entire project.

## Deprecation policy
- Before using any library method/API (for example Jest APIs), verify whether it is deprecated in the installed version.
- If deprecated, replace it with the current recommended API for that version.
