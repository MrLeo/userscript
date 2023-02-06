<script setup lang="ts">
import { ref, watch } from 'vue'
import { useDraggable, useStorage, useClipboard } from '@vueuse/core'
import { GM_info } from '$'
import packageInfo from '../package.json'

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
    .replace(/^int|long$/i, 'number')
    .replace(/^List<([^>]*)>$/i, '$1[]')

const tables = ref<JQuery<HTMLElement>>()
const output = ref()
const TypeRequest = ref('')
const TypeResponse = ref('')

const getTables = () => {
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

      if (/body参数/gi.test(name)) {
        const interfaceFieldStr = json
          .map((item) => {
            if ('参数名' === item['参数名']) return ''
            if (/^page.?/.test(item['参数名'])) return ''
            return [item['说明'] ? `  /** ${item['说明']} */` : '', `  ${item['参数名']}: ${typeReplace(item['类型'])}`].filter(Boolean).join('\n')
          })
          .filter(Boolean)
        TypeRequest.value = [`export interface Request {`, ...interfaceFieldStr, `}`].join('\n')
        console.info(`[LOG] -> TypeRequest`, TypeRequest.value)
        return
      }

      if (/字段说明/gi.test(name) || /^\w+$/i.test(name)) {
        const interfaceFieldStr = json
          .map((item) => {
            return [item['说明'] ? `  /** ${item['说明']} */` : '', `  ${item['字段名称']}: ${typeReplace(item['类型'])}`].filter(Boolean).join('\n')
          })
          .filter(Boolean)
        TypeResponse.value += [`export interface ${/^\w+$/i.test(name) ? name : 'Response'} {`, ...interfaceFieldStr, `}`].join('\n') + '\n\n'
        console.info(`[LOG] -> TypeResponse`, TypeResponse.value)
        return
      }

      if (name) {
        output.value[name] = json
      }
    })
  },
)

const { copy, isSupported } = useClipboard()
</script>

<template>
  <div ref="root" class="inno-userscript_invoice" :style="style">
    <h1 ref="drag" class="drag">
      Table to JSON -
      <a :href="`https://gitee.com/mr.leo/userscript/raw/main/${packageInfo.name}.user.js`">{{ version }}</a>
      &nbsp;/&nbsp;
      <a class="btn" @click="getTables()">解析</a>
      &nbsp;/&nbsp;
      <a class="btn" @click="getTables()">关闭</a>
    </h1>
    <div v-if="tables" class="main">
      <pre>{{ JSON.stringify(output, null, 2) }}</pre>
      <details>
        <summary>Request <a v-if="isSupported" class="copy" @click="copy(TypeResponse)">copy</a></summary>
        <pre>{{ TypeRequest }}</pre>
      </details>
      <details>
        <summary>Response <a v-if="isSupported" class="copy" @click="copy(TypeResponse)">copy</a></summary>
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
  overflow: auto;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;

  .main {
    overflow: auto;
    padding: 4px;
  }

  .drag {
    cursor: move;

    font-size: 16px;
    background: #ccc;
    padding: 8px;
  }
}

.btn {
  cursor: pointer;
}

.copy {
  cursor: copy;
}

details {
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 0.5em 0.5em 0;
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
