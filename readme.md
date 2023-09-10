# Repro for issue

- `pnpm i` (or yarn or npm)
- `npx tsc -p` to build the project and emit the d.ts files
- notice the TS4023 error

(excluding the file label.tsx results in successful build and d.ts files gen)
