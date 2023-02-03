<script setup lang="ts">
import { ref, watch } from 'vue'
import { useDraggable, useStorage, useClipboard } from '@vueuse/core'

const drag = ref<HTMLElement | null>()

let iframe = document.createElement('iframe')
iframe.style.display = 'none'
document.body.appendChild(iframe)
// @ts-ignore
console = iframe?.contentWindow?.console
window.console = console

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

const autoRefreshTables = setInterval(() => {
  getTables()
  if (tables.value?.length) clearInterval(autoRefreshTables)
}, 1000)

watch(
  () => tables.value,
  (v) => {
    console.info(`[LOG] -> 页面表格渲染更新`, v)
    output.value = {}
    Array.from(tables.value || []).forEach((element) => {
      const name = jQuery(element).parent().prev().text()
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
      } else if (/字段说明/gi.test(name) || /^\w+$/i.test(name)) {
        const interfaceFieldStr = json
          .map((item) => {
            return [item['说明'] ? `  /** ${item['说明']} */` : '', `  ${item['字段名称']}: ${typeReplace(item['类型'])}`].filter(Boolean).join('\n')
          })
          .filter(Boolean)
        TypeResponse.value += [`export interface ${/^\w+$/i.test(name) ? name : 'Response'} {`, ...interfaceFieldStr, `}`].join('\n') + '\n\n'
        console.info(`[LOG] -> TypeResponse`, TypeResponse.value)
      } else {
        if (name) {
          output.value[name] = json
        }
      }
    })
  },
)

const { copy, isSupported } = useClipboard()
</script>

<template>
  <div v-if="tables" ref="root" class="inno-userscript_invoice" :style="style">
    <h1 ref="drag" class="drag">
      Table to JSON
      <a @click="getTables()">重新解析</a>
    </h1>
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
</template>

<style lang="scss" scoped>
.inno-userscript_invoice {
  position: fixed;
  z-index: 9999;
  background-color: #fff;
  box-shadow: 5px 5px 5px #ccc, -5px -5px 5px #ccc;
  max-height: 80%;
  overflow: auto;

  .drag {
    cursor: move;

    font-size: 16px;
    background: #ccc;
    padding: 8px;
  }
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
