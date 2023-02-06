import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
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
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    Components({
      resolvers: [ArcoResolver({ sideEffect: true })],
    }),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: '@arco-design/web-vue',
          esModule: true,
          resolveStyle: (name) => {
            // less
            // return `@arco-design/web-vue/es/${name}/style/index.js`
            // css
            return `@arco-design/web-vue/es/${name}/style/css.js`
          },
        },
      ],
    }),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'https://xuebin.me/',
        match: ['*://wiki.zhaopin.com/*'],
        updateURL: `https://gitee.com/mr.leo/userscript/raw/main/${packageInfo.name}.user.js`,
        downloadURL: `https://gitee.com/mr.leo/userscript/raw/main/${packageInfo.name}.user.js`,
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
