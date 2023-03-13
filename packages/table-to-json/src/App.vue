<script setup lang="ts">
import { ref, watch } from 'vue'
import { useDraggable, useStorage, useClipboard } from '@vueuse/core'
import { GM_info } from '$'
import packageInfo from '../package.json'
import { upperFirst } from 'lodash'

const version = GM_info.script.version

const drag = ref<HTMLElement | null>()

const initialValue = useStorage('inno-userscript_invoice_style', { x: 10, y: 10 })
const { position, style } = useDraggable(drag, { initialValue })
watch(
  () => style.value,
  () => (initialValue.value = position.value),
)

const typeReplace = (type) =>
  type
    .replace(/^string$/i, 'string')
    .replace(/^integer|int|long$/i, 'number')
    .replace(/^List<([^>]*)>$/i, '$1[]')

const tables = ref<JQuery<HTMLElement>>()

const output = ref()
const api = ref('')
const apiMethod = ref('')
const apiDemo = ref('')
const TypeRequest = ref('')
const TypeResponse = ref('')

const getTables = () => {
  TypeRequest.value = ''
  TypeResponse.value = ''
  tables.value = jQuery('table')
}

// const autoRefreshTables = setInterval(() => {
//   getTables()
//   if (tables.value?.length) clearInterval(autoRefreshTables)
// }, 1000)

watch(
  () => tables.value,
  (v) => {
    console.info(`[LOG] -> 页面表格渲染更新`, v)
    output.value = {}
    Array.from(tables.value || []).forEach((element) => {
      const name =
        jQuery(element).parent().prev().text() ||
        jQuery(element).parent().prev().prev().text() ||
        jQuery(element).parent().prev().prev().prev().text() ||
        jQuery(element).parent().prev().prev().prev().prev().text()
      const json = (jQuery(element) as any).tableToJSON()

      if (/^Request/.test(name) || /^Response/.test(name)) return

      try {
        if (/请求URL地址/i.test(name)) {
          output.value[name] = json
          api.value = json[0]['地址'].replace(/\{.*\}/, '')
          apiMethod.value = api.value.replace(/.*\//gi, '')
          if (apiMethod.value) {
            apiDemo.value = `export const ${apiMethod.value} = passPost<\n  ${upperFirst(apiMethod.value)}Request,\n  ${upperFirst(
              apiMethod.value,
            )}Response\n>('${api.value}')`
          }
          return
        }
      } catch (err) {
        console.error(`[LOG] -> 请求URL地址`, err)
      }

      try {
        if (/body参数/gi.test(name)) {
          const interfaceFieldStr = json
            .map((item) => {
              if ('参数名' === item['参数名']) return ''
              if (/^page.?/.test(item['参数名'])) return ''
              return [item['说明'] ? `  /** ${item['说明']} */` : '', `  ${item['参数名']}: ${typeReplace(item['类型'])}`].filter(Boolean).join('\n')
            })
            .filter(Boolean)
          TypeRequest.value = [`export interface ${upperFirst(apiMethod.value)}Request {`, ...interfaceFieldStr, `}`].join('\n')
          console.info(`[LOG] -> TypeRequest`, TypeRequest.value)
          return
        }
      } catch (err) {
        console.error(`[LOG] -> 请求参数 -> BODY参数`, err)
      }

      try {
        if (/字段说明/gi.test(name) || /^\w+(\s*：\s*)?$/i.test(name) || /^\w+DTO/.test(name)) {
          const interfaceFieldStr = json
            .map((item) => {
              return [item['说明'] ? `  /** ${item['说明']} */` : '', `  ${item['字段名称'] || item['参数名']}: ${typeReplace(item['类型'])}`]
                .filter(Boolean)
                .join('\n')
            })
            .filter(Boolean)
          TypeResponse.value +=
            [`export interface ${/^\w+$/i.test(name) ? name : `${upperFirst(apiMethod.value)}Response`} {`, ...interfaceFieldStr, `}`].join('\n') +
            '\n\n'
          console.info(`[LOG] -> TypeResponse`, TypeResponse.value)
          return
        }
      } catch (err) {
        console.error(`[LOG] -> 返回结果 -> 字段说明`, err)
      }

      output.value[name || Symbol()] = json
    })
  },
)

const { copy, isSupported } = useClipboard()
</script>

<template>
  <div ref="root" class="inno-userscript_invoice" :style="style">
    <h1 ref="drag" class="drag">
      Table to JSON -
      <small>
        <a :href="`https://gitee.com/mr.leo/userscript/raw/main/${packageInfo.name}.user.js`">{{ version }}</a>
        &nbsp;/&nbsp;
        <a class="btn" @click="getTables()">解析</a>
        &nbsp;/&nbsp;
        <a class="btn" @click="tables = undefined">关闭</a>
        <template v-if="isSupported && tables">
          &nbsp;/&nbsp;
          <a class="copy" @click="copy(`${apiDemo}\n${TypeRequest}\n${TypeResponse}`)">copy</a>
        </template>
      </small>
    </h1>
    <div v-if="tables" class="main">
      <pre>{{ JSON.stringify(output, null, 2) }}</pre>
      <details open>
        <summary>接口定义</summary>
        <pre>{{ apiDemo }}</pre>
        <pre>{{ TypeRequest }}</pre>
        <pre>{{ TypeResponse }}</pre>
      </details>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inno-userscript_invoice {
  position: fixed;
  z-index: 9999;
  background-color: #fff;
  box-shadow: 5px 5px 10px 0px #ccc;
  max-height: 80%;
  max-width: 600px;
  overflow: auto;
  resize: both;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  .drag {
    cursor: move;

    font-size: 16px;
    background: #ccc;
    padding: 8px;
  }
  .main {
    overflow: auto;
    padding: 4px;
  }
}

.btn {
  cursor: pointer;
}

.copy {
  cursor: copy;
}

.pre {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
}

details {
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 0.5em 0.5em 0;
  margin-top: 8px;
}

summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
  cursor: pointer;
}

details[open] {
  padding: 0.5em;
}

details[open] summary {
  border-bottom: 1px solid #aaa;
  margin-bottom: 0.5em;
}
</style>
