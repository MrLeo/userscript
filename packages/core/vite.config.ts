import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: '@leo/core',
      fileName: (format) => `core.${format}.js`,
    },
    sourcemap: true,
  },
})
