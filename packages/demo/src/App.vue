<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { ref, watch } from 'vue'
import { useDraggable, useStorage } from '@vueuse/core'

const root = ref<HTMLElement | null>()

const initialValue = useStorage('inno-userscript_invoice_style', { x: 10, y: 10 })
const { position, style } = useDraggable(root, { initialValue })
watch(
  () => style.value,
  (value) => {
    console.log(`[LOG] -> value`, value)
    initialValue.value = position.value
  },
)
</script>

<template>
  <div ref="root" class="inno-userscript_invoice" :style="style">
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style lang="scss" scoped>
.inno-userscript_invoice {
  cursor: move;
  position: fixed;
  z-index: 9999;
  background-color: #fff;
  box-shadow: 5px 5px 5px #ccc, -5px -5px 5px #ccc;
}
</style>
