# Architecture

## Main pattern
Feature-based architecture.

## Base structure
- `src/app`: application bootstrap and providers.
- `src/features`: domain-based functionalities.
- `src/components`: global reusable components.
- `src/navigation`: root navigation.
- `src/hooks`: shared hooks.
- `src/services`: global services (for example, base API).
- `src/store`: global state.
- `src/utils`: pure utility functions.
- `src/types`: shared types.

## Modularity rule
Each feature should keep its own internal structure (`screens`, `components`, `hooks`, `services`, and `types` when needed).

## Navigation and screen safety rule
- Every new screen must be registered and navigated using `react-navigation`.
- Every screen must include safe-area handling (for example `SafeAreaView` or `useSafeAreaInsets`).
