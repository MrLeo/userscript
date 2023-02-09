import semver from 'semver'
import { GM_info, GM_xmlhttpRequest } from '$'

console.info(`%c[${GM_info.script.name}]`, 'color: #409eff; font-weight: bold; font-size: 32px;', GM_info)
export const checkVersion = async () => {
  if (!import.meta.env.DEV) {
    GM_xmlhttpRequest({
      method: 'GET',
      url: `https://gitee.com/mr.leo/userscript/raw/main/packages/${GM_info.script.name.replace('@leo/', '')}/package.json`,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      onload({ response }) {
        const versionGt = semver.gt(response.version, GM_info.script.version)
        console.info(`[LOG] -> onload -> response.version(${response.version}) > GM_info.script.version(${GM_info.script.version}) = ${versionGt}`)
        if (versionGt && GM_info.scriptUpdateURL) {
          window.location.href = GM_info.scriptUpdateURL
        } else {
          setTimeout(() => checkVersion(), 10000)
        }
      },
    })
  }
}
