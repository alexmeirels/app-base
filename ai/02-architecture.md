# Architecture

## Main pattern
Feature-based architecture.

## Base structure
- `src/app`: application bootstrap and providers.
- `src/assets`: static assets used by the app (for example logos, icons, images, and local media files).
- `src/context`: global React contexts and context hooks.
- `src/features`: domain-based functionalities.
- `src/components`: global reusable components.
- `src/navigation`: root navigation.
- `src/hooks`: shared hooks.
- `src/services`: global services (for example, base API).
- `src/store`: global state.
- `src/theme`: global theme tokens, palettes, and theme mapping.
- `src/utils`: pure utility functions.
- `src/types`: shared types.

## Modularity rule
Each feature should keep its own internal structure (`screens`, `components`, `hooks`, `services`, and `types` when needed).

## Navigation and screen safety rule
- Every new screen must be registered and navigated using `react-navigation`.
- Every new screen must include `SafeAreaView` in its own screen structure (screen root), using `react-native-safe-area-context`.
- `useSafeAreaInsets` can be used as a complement, but it does not replace the required `SafeAreaView` wrapper.
- For every new navigation flow/screen, disable the right-swipe back gesture (`gestureEnabled: false`) to prevent returning to the previous screen by swiping.

## Architecture documentation rule
- Whenever a new folder is created as part of the architecture, the corresponding `ai/*.md` architecture/folder documentation must be updated in the same change.
