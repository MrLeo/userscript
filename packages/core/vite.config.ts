import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // https://vitejs.dev/guide/build.html#library-mode
    lib: {
      entry: 'src/main.ts',
      name: '@leo/core',
      fileName: (format) => `core.${format}.js`,
    },
    sourcemap: true,
  },
})
