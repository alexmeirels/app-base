# Folder Standards

## Rules
- Domain screens must live in `src/features/<feature>/screens`.
- Feature-specific components must live in `src/features/<feature>/components`.
- Feature-specific hooks must live in `src/features/<feature>/hooks`.
- Feature-specific services must live in `src/features/<feature>/services`.
- Feature-specific types must live in `src/features/<feature>/types.ts` (or `types/` when it grows).
- Global reusable components must live in `src/components`.
- Global contexts must live in `src/context`.
- Global theme files must live in `src/theme`.
- Whenever a new context is created, it must be created inside `src/context`.
- Most components must be created as a folder with this structure:
  - `index.tsx`
  - `types.ts`
  - `styles.tsx`

## Documentation sync rule
- Whenever a new folder is created inside the defined architecture, update `ai/02-architecture.md` and this file (`ai/04-folder-standards.md`) in the same change.

## Style organization
For each UI module, create and maintain a `styles.tsx` file in the same directory.
