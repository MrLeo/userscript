/* eslint-disable no-console */
import { createApp } from 'vue'
import semver from 'semver'
import './style.css'
import App from './App.vue'
import { GM_info, GM_xmlhttpRequest } from '$'
import core from '@leo/core'

const checkVersion = async () => {
  console.log(`[core] ->`, core)
  console.log(`%c[${GM_info.script.name}]`, 'color: #409eff; font-weight: bold; font-size: 32px;', GM_info)

  if (!import.meta.env.DEV) {
    GM_xmlhttpRequest({
      method: 'GET',
      url: 'https://gitee.com/mr.leo/userscript/raw/main/packages/table-to-json/package.json',
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      onload({ response }) {
        const versionGt = semver.gt(response.version, GM_info.script.version)
        console.info(`[LOG] -> onload -> response.version(${response.version}) > GM_info.script.version(${GM_info.script.version}) = ${versionGt}`)
        if (versionGt && GM_info.scriptUpdateURL) window.location.href = GM_info.scriptUpdateURL
      },
    })

    setTimeout(() => checkVersion(), 10000)
  }
}
checkVersion()

createApp(App).mount(
  (() => {
    const app = document.createElement('div')
    document.body.append(app)
    return app
  })(),
)
