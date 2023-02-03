import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import monkey, { cdn } from 'vite-plugin-monkey'
import packageInfo from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   origin: 'http://127.0.0.1:5173',
  // },
  build: {
    outDir: '../../',
  },
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'https://xuebin.me/',
        match: ['*://wiki.zhaopin.com/*'],
        updateURL: `https://gitee.com/mr.leo/userscript/raw/main/${packageInfo.name}.user.js`,
        require: [
          'https://cdn.jsdelivr.net/npm/core-js-bundle@latest/minified.js',
          'https://cdn.jsdelivr.net/npm/table-to-json@1.0.0/lib/jquery.tabletojson.min.js',
        ],
      },
      build: {
        externalGlobals: {
          jQuery: cdn.jsdelivr('jquery', 'dist/jquery.min.js'),
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        },
      },
    }),
  ],
})
