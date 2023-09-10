# Repro for issue

- `pnpm i` (or yarn or npm)
- `npx tsc -p` to build the project and emit the d.ts files
- notice the TS4023 errors

(excluding the file label.tsx and label-using-dev-jsx results in successful build and d.ts files gen)

The folder fixed contains the core.d.ts as it will come out of the suggested PR as well as the generated d.ts files
