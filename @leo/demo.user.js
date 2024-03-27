// ==UserScript==
// @name         @leo/demo
// @namespace    https://github.com/MrLeo/userscript
// @version      1.0.6
// @author       https://xuebin.me
// @icon         https://vitejs.dev/logo.svg
// @homepage     https://xuebin.me
// @homepageURL  https://xuebin.me
// @downloadURL  https://gitee.com/mr.leo/userscript/raw/main/@leo/demo.user.js
// @updateURL    https://gitee.com/mr.leo/userscript/raw/main/@leo/demo.user.js
// @match        *://*/*
// @require      https://cdn.jsdelivr.net/npm/core-js-bundle@latest/minified.js
// @require      https://cdn.jsdelivr.net/npm/vue@3.2.45/dist/vue.global.prod.js
// @grant        GM_info
// @grant        GM_xmlhttpRequest
// ==/UserScript==

;((e) => {
  const o = document.createElement('style')
  ;(o.dataset.source = 'vite-plugin-monkey'), (o.innerText = e), document.head.appendChild(o)
})(
  ':root{font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;place-items:center;min-width:320px;min-height:100vh}h1{font-size:3.2em;line-height:1.1}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;-webkit-transition:border-color .25s;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}.card{padding:2em}#app{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}.logo[data-v-7e546854]{height:6em;padding:1.5em;will-change:filter}.logo[data-v-7e546854]:hover{-webkit-filter:drop-shadow(0 0 2em #646cffaa);filter:drop-shadow(0 0 2em #646cffaa)}.logo.vue[data-v-7e546854]:hover{-webkit-filter:drop-shadow(0 0 2em #42b883aa);filter:drop-shadow(0 0 2em #42b883aa)}.read-the-docs[data-v-7e546854]{color:#888}.inno-userscript_invoice[data-v-52c423f0]{cursor:move;position:fixed;z-index:9999;background-color:#fff;-webkit-box-shadow:5px 5px 5px #ccc,-5px -5px 5px #ccc;box-shadow:5px 5px 5px #ccc,-5px -5px 5px #ccc;max-height:80%;overflow:auto}',
)

;(function (vue) {
  'use strict'
  const style = ''
  const viteSvg =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjMxLjg4IiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDI1NyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJJY29uaWZ5SWQxODEzMDg4ZmUxZmJjMDFmYjQ2NiIgeDE9Ii0uODI4JSIgeDI9IjU3LjYzNiUiIHkxPSI3LjY1MiUiIHkyPSI3OC40MTElIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNDFEMUZGIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQkQzNEZFIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9Ikljb25pZnlJZDE4MTMwODhmZTFmYmMwMWZiNDY3IiB4MT0iNDMuMzc2JSIgeDI9IjUwLjMxNiUiIHkxPSIyLjI0MiUiIHkyPSI4OS4wMyUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkVBODMiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjguMzMzJSIgc3RvcC1jb2xvcj0iI0ZGREQzNSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZGQTgwMCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGZpbGw9InVybCgjSWNvbmlmeUlkMTgxMzA4OGZlMWZiYzAxZmI0NjYpIiBkPSJNMjU1LjE1MyAzNy45MzhMMTM0Ljg5NyAyNTIuOTc2Yy0yLjQ4MyA0LjQ0LTguODYyIDQuNDY2LTExLjM4Mi4wNDhMLjg3NSAzNy45NThjLTIuNzQ2LTQuODE0IDEuMzcxLTEwLjY0NiA2LjgyNy05LjY3bDEyMC4zODUgMjEuNTE3YTYuNTM3IDYuNTM3IDAgMCAwIDIuMzIyLS4wMDRsMTE3Ljg2Ny0yMS40ODNjNS40MzgtLjk5MSA5LjU3NCA0Ljc5NiA2Ljg3NyA5LjYyWiI+PC9wYXRoPjxwYXRoIGZpbGw9InVybCgjSWNvbmlmeUlkMTgxMzA4OGZlMWZiYzAxZmI0NjcpIiBkPSJNMTg1LjQzMi4wNjNMOTYuNDQgMTcuNTAxYTMuMjY4IDMuMjY4IDAgMCAwLTIuNjM0IDMuMDE0bC01LjQ3NCA5Mi40NTZhMy4yNjggMy4yNjggMCAwIDAgMy45OTcgMy4zNzhsMjQuNzc3LTUuNzE4YzIuMzE4LS41MzUgNC40MTMgMS41MDcgMy45MzYgMy44MzhsLTcuMzYxIDM2LjA0N2MtLjQ5NSAyLjQyNiAxLjc4MiA0LjUgNC4xNTEgMy43OGwxNS4zMDQtNC42NDljMi4zNzItLjcyIDQuNjUyIDEuMzYgNC4xNSAzLjc4OGwtMTEuNjk4IDU2LjYyMWMtLjczMiAzLjU0MiAzLjk3OSA1LjQ3MyA1Ljk0MyAyLjQzN2wxLjMxMy0yLjAyOGw3Mi41MTYtMTQ0LjcyYzEuMjE1LTIuNDIzLS44OC01LjE4Ni0zLjU0LTQuNjcybC0yNS41MDUgNC45MjJjLTIuMzk2LjQ2Mi00LjQzNS0xLjc3LTMuNzU5LTQuMTE0bDE2LjY0Ni01Ny43MDVjLjY3Ny0yLjM1LTEuMzctNC41ODMtMy43NjktNC4xMTNaIj48L3BhdGg+PC9zdmc+'
  const vueSvg =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjM3LjA3IiBoZWlnaHQ9IjM2IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDE5OCI+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0iTTIwNC44IDBIMjU2TDEyOCAyMjAuOEwwIDBoOTcuOTJMMTI4IDUxLjJMMTU3LjQ0IDBoNDcuMzZaIj48L3BhdGg+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0ibTAgMGwxMjggMjIwLjhMMjU2IDBoLTUxLjJMMTI4IDEzMi40OEw1MC41NiAwSDBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzM1NDk1RSIgZD0iTTUwLjU2IDBMMTI4IDEzMy4xMkwyMDQuOCAwaC00Ny4zNkwxMjggNTEuMkw5Ny45MiAwSDUwLjU2WiI+PC9wYXRoPjwvc3ZnPg=='
  const _withScopeId = (n) => (vue.pushScopeId('data-v-7e546854'), (n = n()), vue.popScopeId(), n)
  const _hoisted_1 = {
    href: 'https://vitejs.dev',
    target: '_blank',
  }
  const _hoisted_2 = ['src']
  const _hoisted_3 = {
    href: 'https://vuejs.org/',
    target: '_blank',
  }
  const _hoisted_4 = ['src']
  const _hoisted_5 = { class: 'card' }
  const _hoisted_6 = /* @__PURE__ */ _withScopeId(() =>
    /* @__PURE__ */ vue.createElementVNode(
      'p',
      null,
      [
        /* @__PURE__ */ vue.createTextVNode(' Edit '),
        /* @__PURE__ */ vue.createElementVNode('code', null, 'components/HelloWorld.vue'),
        /* @__PURE__ */ vue.createTextVNode(' to test HMR '),
      ],
      -1,
    ),
  )
  const _hoisted_7 = /* @__PURE__ */ _withScopeId(() =>
    /* @__PURE__ */ vue.createElementVNode(
      'p',
      null,
      [
        /* @__PURE__ */ vue.createTextVNode(' Check out '),
        /* @__PURE__ */ vue.createElementVNode(
          'a',
          {
            href: 'https://vuejs.org/guide/quick-start.html#local',
            target: '_blank',
          },
          'create-vue',
        ),
        /* @__PURE__ */ vue.createTextVNode(', the official Vue + Vite starter '),
      ],
      -1,
    ),
  )
  const _hoisted_8 = /* @__PURE__ */ _withScopeId(() =>
    /* @__PURE__ */ vue.createElementVNode(
      'p',
      null,
      [
        /* @__PURE__ */ vue.createTextVNode(' Install '),
        /* @__PURE__ */ vue.createElementVNode(
          'a',
          {
            href: 'https://github.com/johnsoncodehk/volar',
            target: '_blank',
          },
          'Volar',
        ),
        /* @__PURE__ */ vue.createTextVNode(' in your IDE for a better DX '),
      ],
      -1,
    ),
  )
  const _hoisted_9 = /* @__PURE__ */ _withScopeId(() =>
    /* @__PURE__ */ vue.createElementVNode('p', { class: 'read-the-docs' }, 'Click on the Vite and Vue logos to learn more', -1),
  )
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: 'HelloWorld',
    props: {
      msg: null,
    },
    setup(__props) {
      const count = vue.ref(0)
      return (_ctx, _cache) => {
        return (
          vue.openBlock(),
          vue.createElementBlock(
            vue.Fragment,
            null,
            [
              vue.createElementVNode('a', _hoisted_1, [
                vue.createElementVNode(
                  'img',
                  {
                    src: vue.unref(viteSvg),
                    class: 'logo',
                    alt: 'Vite logo',
                  },
                  null,
                  8,
                  _hoisted_2,
                ),
              ]),
              vue.createElementVNode('a', _hoisted_3, [
                vue.createElementVNode(
                  'img',
                  {
                    src: vue.unref(vueSvg),
                    class: 'logo vue',
                    alt: 'Vue logo',
                  },
                  null,
                  8,
                  _hoisted_4,
                ),
              ]),
              vue.createElementVNode('h1', null, vue.toDisplayString(__props.msg), 1),
              vue.createElementVNode('div', _hoisted_5, [
                vue.createElementVNode(
                  'button',
                  {
                    type: 'button',
                    onClick: _cache[0] || (_cache[0] = ($event) => count.value++),
                  },
                  'count is ' + vue.toDisplayString(count.value),
                  1,
                ),
                _hoisted_6,
              ]),
              _hoisted_7,
              _hoisted_8,
              _hoisted_9,
            ],
            64,
          )
        )
      }
    },
  })
  const HelloWorld_vue_vue_type_style_index_0_scoped_7e546854_lang = ''
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc
    for (const [key, val] of props) {
      target[key] = val
    }
    return target
  }
  const HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$1, [['__scopeId', 'data-v-7e546854']])
  var _a
  const isClient = typeof window !== 'undefined'
  const isFunction = (val) => typeof val === 'function'
  const isString = (val) => typeof val === 'string'
  const noop = () => {}
  isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent)
  function resolveUnref(r) {
    return typeof r === 'function' ? r() : vue.unref(r)
  }
  function createFilterWrapper(filter, fn) {
    function wrapper(...args) {
      return new Promise((resolve, reject) => {
        Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args }))
          .then(resolve)
          .catch(reject)
      })
    }
    return wrapper
  }
  const bypassFilter = (invoke) => {
    return invoke()
  }
  function pausableFilter(extendFilter = bypassFilter) {
    const isActive = vue.ref(true)
    function pause() {
      isActive.value = false
    }
    function resume() {
      isActive.value = true
    }
    const eventFilter = (...args) => {
      if (isActive.value) extendFilter(...args)
    }
    return { isActive: vue.readonly(isActive), pause, resume, eventFilter }
  }
  function identity(arg) {
    return arg
  }
  function tryOnScopeDispose(fn) {
    if (vue.getCurrentScope()) {
      vue.onScopeDispose(fn)
      return true
    }
    return false
  }
  var __defProp$7 = Object.defineProperty
  var __defProps$5 = Object.defineProperties
  var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors
  var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols
  var __hasOwnProp$9 = Object.prototype.hasOwnProperty
  var __propIsEnum$9 = Object.prototype.propertyIsEnumerable
  var __defNormalProp$7 = (obj, key, value) =>
    key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : (obj[key] = value)
  var __spreadValues$7 = (a, b) => {
    for (var prop in b || (b = {})) if (__hasOwnProp$9.call(b, prop)) __defNormalProp$7(a, prop, b[prop])
    if (__getOwnPropSymbols$9)
      for (var prop of __getOwnPropSymbols$9(b)) {
        if (__propIsEnum$9.call(b, prop)) __defNormalProp$7(a, prop, b[prop])
      }
    return a
  }
  var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b))
  function toRefs(objectRef) {
    if (!vue.isRef(objectRef)) return vue.toRefs(objectRef)
    const result = Array.isArray(objectRef.value) ? new Array(objectRef.value.length) : {}
    for (const key in objectRef.value) {
      result[key] = vue.customRef(() => ({
        get() {
          return objectRef.value[key]
        },
        set(v) {
          if (Array.isArray(objectRef.value)) {
            const copy = [...objectRef.value]
            copy[key] = v
            objectRef.value = copy
          } else {
            const newObject = __spreadProps$5(__spreadValues$7({}, objectRef.value), { [key]: v })
            Object.setPrototypeOf(newObject, objectRef.value)
            objectRef.value = newObject
          }
        },
      }))
    }
    return result
  }
  var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols
  var __hasOwnProp$6 = Object.prototype.hasOwnProperty
  var __propIsEnum$6 = Object.prototype.propertyIsEnumerable
  var __objRest$5 = (source, exclude) => {
    var target = {}
    for (var prop in source) if (__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop]
    if (source != null && __getOwnPropSymbols$6)
      for (var prop of __getOwnPropSymbols$6(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop)) target[prop] = source[prop]
      }
    return target
  }
  function watchWithFilter(source, cb, options = {}) {
    const _a2 = options,
      { eventFilter = bypassFilter } = _a2,
      watchOptions = __objRest$5(_a2, ['eventFilter'])
    return vue.watch(source, createFilterWrapper(eventFilter, cb), watchOptions)
  }
  var __defProp$2 = Object.defineProperty
  var __defProps$2 = Object.defineProperties
  var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors
  var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols
  var __hasOwnProp$2 = Object.prototype.hasOwnProperty
  var __propIsEnum$2 = Object.prototype.propertyIsEnumerable
  var __defNormalProp$2 = (obj, key, value) =>
    key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : (obj[key] = value)
  var __spreadValues$2 = (a, b) => {
    for (var prop in b || (b = {})) if (__hasOwnProp$2.call(b, prop)) __defNormalProp$2(a, prop, b[prop])
    if (__getOwnPropSymbols$2)
      for (var prop of __getOwnPropSymbols$2(b)) {
        if (__propIsEnum$2.call(b, prop)) __defNormalProp$2(a, prop, b[prop])
      }
    return a
  }
  var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b))
  var __objRest$1 = (source, exclude) => {
    var target = {}
    for (var prop in source) if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop]
    if (source != null && __getOwnPropSymbols$2)
      for (var prop of __getOwnPropSymbols$2(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop)) target[prop] = source[prop]
      }
    return target
  }
  function watchPausable(source, cb, options = {}) {
    const _a2 = options,
      { eventFilter: filter } = _a2,
      watchOptions = __objRest$1(_a2, ['eventFilter'])
    const { eventFilter, pause, resume, isActive } = pausableFilter(filter)
    const stop = watchWithFilter(
      source,
      cb,
      __spreadProps$2(__spreadValues$2({}, watchOptions), {
        eventFilter,
      }),
    )
    return { stop, pause, resume, isActive }
  }
  function unrefElement(elRef) {
    var _a2
    const plain = resolveUnref(elRef)
    return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain
  }
  const defaultWindow = isClient ? window : void 0
  isClient ? window.document : void 0
  isClient ? window.navigator : void 0
  isClient ? window.location : void 0
  function useEventListener(...args) {
    let target
    let events
    let listeners
    let options
    if (isString(args[0]) || Array.isArray(args[0])) {
      ;[events, listeners, options] = args
      target = defaultWindow
    } else {
      ;[target, events, listeners, options] = args
    }
    if (!target) return noop
    if (!Array.isArray(events)) events = [events]
    if (!Array.isArray(listeners)) listeners = [listeners]
    const cleanups = []
    const cleanup = () => {
      cleanups.forEach((fn) => fn())
      cleanups.length = 0
    }
    const register = (el, event, listener) => {
      el.addEventListener(event, listener, options)
      return () => el.removeEventListener(event, listener, options)
    }
    const stopWatch = vue.watch(
      () => unrefElement(target),
      (el) => {
        cleanup()
        if (!el) return
        cleanups.push(
          ...events.flatMap((event) => {
            return listeners.map((listener) => register(el, event, listener))
          }),
        )
      },
      { immediate: true, flush: 'post' },
    )
    const stop = () => {
      stopWatch()
      cleanup()
    }
    tryOnScopeDispose(stop)
    return stop
  }
  const _global =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : typeof self !== 'undefined'
      ? self
      : {}
  const globalKey = '__vueuse_ssr_handlers__'
  _global[globalKey] = _global[globalKey] || {}
  const handlers = _global[globalKey]
  function getSSRHandler(key, fallback) {
    return handlers[key] || fallback
  }
  function guessSerializerType(rawInit) {
    return rawInit == null
      ? 'any'
      : rawInit instanceof Set
      ? 'set'
      : rawInit instanceof Map
      ? 'map'
      : rawInit instanceof Date
      ? 'date'
      : typeof rawInit === 'boolean'
      ? 'boolean'
      : typeof rawInit === 'string'
      ? 'string'
      : typeof rawInit === 'object'
      ? 'object'
      : !Number.isNaN(rawInit)
      ? 'number'
      : 'any'
  }
  var __defProp$j = Object.defineProperty
  var __getOwnPropSymbols$l = Object.getOwnPropertySymbols
  var __hasOwnProp$l = Object.prototype.hasOwnProperty
  var __propIsEnum$l = Object.prototype.propertyIsEnumerable
  var __defNormalProp$j = (obj, key, value) =>
    key in obj ? __defProp$j(obj, key, { enumerable: true, configurable: true, writable: true, value }) : (obj[key] = value)
  var __spreadValues$j = (a, b) => {
    for (var prop in b || (b = {})) if (__hasOwnProp$l.call(b, prop)) __defNormalProp$j(a, prop, b[prop])
    if (__getOwnPropSymbols$l)
      for (var prop of __getOwnPropSymbols$l(b)) {
        if (__propIsEnum$l.call(b, prop)) __defNormalProp$j(a, prop, b[prop])
      }
    return a
  }
  const StorageSerializers = {
    boolean: {
      read: (v) => v === 'true',
      write: (v) => String(v),
    },
    object: {
      read: (v) => JSON.parse(v),
      write: (v) => JSON.stringify(v),
    },
    number: {
      read: (v) => Number.parseFloat(v),
      write: (v) => String(v),
    },
    any: {
      read: (v) => v,
      write: (v) => String(v),
    },
    string: {
      read: (v) => v,
      write: (v) => String(v),
    },
    map: {
      read: (v) => new Map(JSON.parse(v)),
      write: (v) => JSON.stringify(Array.from(v.entries())),
    },
    set: {
      read: (v) => new Set(JSON.parse(v)),
      write: (v) => JSON.stringify(Array.from(v)),
    },
    date: {
      read: (v) => new Date(v),
      write: (v) => v.toISOString(),
    },
  }
  function useStorage(key, defaults, storage, options = {}) {
    var _a2
    const {
      flush = 'pre',
      deep = true,
      listenToStorageChanges = true,
      writeDefaults = true,
      mergeDefaults = false,
      shallow,
      window: window2 = defaultWindow,
      eventFilter,
      onError = (e) => {
        console.error(e)
      },
    } = options
    const data = (shallow ? vue.shallowRef : vue.ref)(defaults)
    if (!storage) {
      try {
        storage = getSSRHandler('getDefaultStorage', () => {
          var _a22
          return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage
        })()
      } catch (e) {
        onError(e)
      }
    }
    if (!storage) return data
    const rawInit = resolveUnref(defaults)
    const type = guessSerializerType(rawInit)
    const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type]
    const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, () => write(data.value), { flush, deep, eventFilter })
    if (window2 && listenToStorageChanges) useEventListener(window2, 'storage', update)
    update()
    return data
    function write(v) {
      try {
        if (v == null) {
          storage.removeItem(key)
        } else {
          const serialized = serializer.write(v)
          const oldValue = storage.getItem(key)
          if (oldValue !== serialized) {
            storage.setItem(key, serialized)
            if (window2) {
              window2 == null
                ? void 0
                : window2.dispatchEvent(
                    new StorageEvent('storage', {
                      key,
                      oldValue,
                      newValue: serialized,
                      storageArea: storage,
                    }),
                  )
            }
          }
        }
      } catch (e) {
        onError(e)
      }
    }
    function read(event) {
      const rawValue = event ? event.newValue : storage.getItem(key)
      if (rawValue == null) {
        if (writeDefaults && rawInit !== null) storage.setItem(key, serializer.write(rawInit))
        return rawInit
      } else if (!event && mergeDefaults) {
        const value = serializer.read(rawValue)
        if (isFunction(mergeDefaults)) return mergeDefaults(value, rawInit)
        else if (type === 'object' && !Array.isArray(value)) return __spreadValues$j(__spreadValues$j({}, rawInit), value)
        return value
      } else if (typeof rawValue !== 'string') {
        return rawValue
      } else {
        return serializer.read(rawValue)
      }
    }
    function update(event) {
      if (event && event.storageArea !== storage) return
      if (event && event.key == null) {
        data.value = rawInit
        return
      }
      if (event && event.key !== key) return
      pauseWatch()
      try {
        data.value = read(event)
      } catch (e) {
        onError(e)
      } finally {
        if (event) vue.nextTick(resumeWatch)
        else resumeWatch()
      }
    }
  }
  var __defProp$e = Object.defineProperty
  var __defProps$4 = Object.defineProperties
  var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors
  var __getOwnPropSymbols$g = Object.getOwnPropertySymbols
  var __hasOwnProp$g = Object.prototype.hasOwnProperty
  var __propIsEnum$g = Object.prototype.propertyIsEnumerable
  var __defNormalProp$e = (obj, key, value) =>
    key in obj ? __defProp$e(obj, key, { enumerable: true, configurable: true, writable: true, value }) : (obj[key] = value)
  var __spreadValues$e = (a, b) => {
    for (var prop in b || (b = {})) if (__hasOwnProp$g.call(b, prop)) __defNormalProp$e(a, prop, b[prop])
    if (__getOwnPropSymbols$g)
      for (var prop of __getOwnPropSymbols$g(b)) {
        if (__propIsEnum$g.call(b, prop)) __defNormalProp$e(a, prop, b[prop])
      }
    return a
  }
  var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b))
  function useDraggable(target, options = {}) {
    var _a2, _b, _c
    const draggingElement = (_a2 = options.draggingElement) != null ? _a2 : defaultWindow
    const draggingHandle = (_b = options.handle) != null ? _b : target
    const position = vue.ref((_c = resolveUnref(options.initialValue)) != null ? _c : { x: 0, y: 0 })
    const pressedDelta = vue.ref()
    const filterEvent = (e) => {
      if (options.pointerTypes) return options.pointerTypes.includes(e.pointerType)
      return true
    }
    const handleEvent = (e) => {
      if (resolveUnref(options.preventDefault)) e.preventDefault()
      if (resolveUnref(options.stopPropagation)) e.stopPropagation()
    }
    const start = (e) => {
      var _a22
      if (!filterEvent(e)) return
      if (resolveUnref(options.exact) && e.target !== resolveUnref(target)) return
      const rect = resolveUnref(target).getBoundingClientRect()
      const pos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
      if (((_a22 = options.onStart) == null ? void 0 : _a22.call(options, pos, e)) === false) return
      pressedDelta.value = pos
      handleEvent(e)
    }
    const move = (e) => {
      var _a22
      if (!filterEvent(e)) return
      if (!pressedDelta.value) return
      position.value = {
        x: e.clientX - pressedDelta.value.x,
        y: e.clientY - pressedDelta.value.y,
      }
      ;(_a22 = options.onMove) == null ? void 0 : _a22.call(options, position.value, e)
      handleEvent(e)
    }
    const end = (e) => {
      var _a22
      if (!filterEvent(e)) return
      if (!pressedDelta.value) return
      pressedDelta.value = void 0
      ;(_a22 = options.onEnd) == null ? void 0 : _a22.call(options, position.value, e)
      handleEvent(e)
    }
    if (isClient) {
      useEventListener(draggingHandle, 'pointerdown', start, true)
      useEventListener(draggingElement, 'pointermove', move, true)
      useEventListener(draggingElement, 'pointerup', end, true)
    }
    return __spreadProps$4(__spreadValues$e({}, toRefs(position)), {
      position,
      isDragging: vue.computed(() => !!pressedDelta.value),
      style: vue.computed(() => `left:${position.value.x}px;top:${position.value.y}px;`),
    })
  }
  var SwipeDirection
  ;(function (SwipeDirection2) {
    SwipeDirection2['UP'] = 'UP'
    SwipeDirection2['RIGHT'] = 'RIGHT'
    SwipeDirection2['DOWN'] = 'DOWN'
    SwipeDirection2['LEFT'] = 'LEFT'
    SwipeDirection2['NONE'] = 'NONE'
  })(SwipeDirection || (SwipeDirection = {}))
  var __defProp = Object.defineProperty
  var __getOwnPropSymbols = Object.getOwnPropertySymbols
  var __hasOwnProp = Object.prototype.hasOwnProperty
  var __propIsEnum = Object.prototype.propertyIsEnumerable
  var __defNormalProp = (obj, key, value) =>
    key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : (obj[key] = value)
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop])
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop])
      }
    return a
  }
  const _TransitionPresets = {
    easeInSine: [0.12, 0, 0.39, 0],
    easeOutSine: [0.61, 1, 0.88, 1],
    easeInOutSine: [0.37, 0, 0.63, 1],
    easeInQuad: [0.11, 0, 0.5, 0],
    easeOutQuad: [0.5, 1, 0.89, 1],
    easeInOutQuad: [0.45, 0, 0.55, 1],
    easeInCubic: [0.32, 0, 0.67, 0],
    easeOutCubic: [0.33, 1, 0.68, 1],
    easeInOutCubic: [0.65, 0, 0.35, 1],
    easeInQuart: [0.5, 0, 0.75, 0],
    easeOutQuart: [0.25, 1, 0.5, 1],
    easeInOutQuart: [0.76, 0, 0.24, 1],
    easeInQuint: [0.64, 0, 0.78, 0],
    easeOutQuint: [0.22, 1, 0.36, 1],
    easeInOutQuint: [0.83, 0, 0.17, 1],
    easeInExpo: [0.7, 0, 0.84, 0],
    easeOutExpo: [0.16, 1, 0.3, 1],
    easeInOutExpo: [0.87, 0, 0.13, 1],
    easeInCirc: [0.55, 0, 1, 0.45],
    easeOutCirc: [0, 0.55, 0.45, 1],
    easeInOutCirc: [0.85, 0, 0.15, 1],
    easeInBack: [0.36, 0, 0.66, -0.56],
    easeOutBack: [0.34, 1.56, 0.64, 1],
    easeInOutBack: [0.68, -0.6, 0.32, 1.6],
  }
  __spreadValues(
    {
      linear: identity,
    },
    _TransitionPresets,
  )
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: 'App',
    setup(__props) {
      const root = vue.ref()
      const initialValue = useStorage('inno-userscript_invoice_style', { x: 10, y: 10 })
      const { position, style: style2 } = useDraggable(root, { initialValue })
      vue.watch(
        () => style2.value,
        () => (initialValue.value = position.value),
      )
      return (_ctx, _cache) => {
        return (
          vue.openBlock(),
          vue.createElementBlock(
            'div',
            {
              ref_key: 'root',
              ref: root,
              class: 'inno-userscript_invoice',
              style: vue.normalizeStyle(vue.unref(style2)),
            },
            [vue.createVNode(HelloWorld, { msg: 'Vite + Vue' })],
            4,
          )
        )
      }
    },
  })
  const App_vue_vue_type_style_index_0_scoped_52c423f0_lang = ''
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [['__scopeId', 'data-v-52c423f0']])
  var reExports = {}
  var re$3 = {
    get exports() {
      return reExports
    },
    set exports(v) {
      reExports = v
    },
  }
  const SEMVER_SPEC_VERSION = '2.0.0'
  const MAX_LENGTH$2 = 256
  const MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER /* istanbul ignore next */ || 9007199254740991
  const MAX_SAFE_COMPONENT_LENGTH = 16
  var constants$1 = {
    SEMVER_SPEC_VERSION,
    MAX_LENGTH: MAX_LENGTH$2,
    MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
    MAX_SAFE_COMPONENT_LENGTH,
  }
  const debug$1 =
    typeof process === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG)
      ? (...args) => console.error('SEMVER', ...args)
      : () => {}
  var debug_1 = debug$1
  ;(function (module, exports) {
    const { MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH2 } = constants$1
    const debug2 = debug_1
    exports = module.exports = {}
    const re2 = (exports.re = [])
    const src = (exports.src = [])
    const t2 = (exports.t = {})
    let R = 0
    const createToken = (name, value, isGlobal) => {
      const index = R++
      debug2(name, index, value)
      t2[name] = index
      src[index] = value
      re2[index] = new RegExp(value, isGlobal ? 'g' : void 0)
    }
    createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*')
    createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+')
    createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*')
    createToken('MAINVERSION', `(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})`)
    createToken('MAINVERSIONLOOSE', `(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})`)
    createToken('PRERELEASEIDENTIFIER', `(?:${src[t2.NUMERICIDENTIFIER]}|${src[t2.NONNUMERICIDENTIFIER]})`)
    createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t2.NUMERICIDENTIFIERLOOSE]}|${src[t2.NONNUMERICIDENTIFIER]})`)
    createToken('PRERELEASE', `(?:-(${src[t2.PRERELEASEIDENTIFIER]}(?:\\.${src[t2.PRERELEASEIDENTIFIER]})*))`)
    createToken('PRERELEASELOOSE', `(?:-?(${src[t2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t2.PRERELEASEIDENTIFIERLOOSE]})*))`)
    createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+')
    createToken('BUILD', `(?:\\+(${src[t2.BUILDIDENTIFIER]}(?:\\.${src[t2.BUILDIDENTIFIER]})*))`)
    createToken('FULLPLAIN', `v?${src[t2.MAINVERSION]}${src[t2.PRERELEASE]}?${src[t2.BUILD]}?`)
    createToken('FULL', `^${src[t2.FULLPLAIN]}$`)
    createToken('LOOSEPLAIN', `[v=\\s]*${src[t2.MAINVERSIONLOOSE]}${src[t2.PRERELEASELOOSE]}?${src[t2.BUILD]}?`)
    createToken('LOOSE', `^${src[t2.LOOSEPLAIN]}$`)
    createToken('GTLT', '((?:<|>)?=?)')
    createToken('XRANGEIDENTIFIERLOOSE', `${src[t2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`)
    createToken('XRANGEIDENTIFIER', `${src[t2.NUMERICIDENTIFIER]}|x|X|\\*`)
    createToken(
      'XRANGEPLAIN',
      `[v=\\s]*(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:${src[t2.PRERELEASE]})?${
        src[t2.BUILD]
      }?)?)?`,
    )
    createToken(
      'XRANGEPLAINLOOSE',
      `[v=\\s]*(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:${
        src[t2.PRERELEASELOOSE]
      })?${src[t2.BUILD]}?)?)?`,
    )
    createToken('XRANGE', `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAIN]}$`)
    createToken('XRANGELOOSE', `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAINLOOSE]}$`)
    createToken(
      'COERCE',
      `${'(^|[^\\d])(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH2}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?(?:$|[^\\d])`,
    )
    createToken('COERCERTL', src[t2.COERCE], true)
    createToken('LONETILDE', '(?:~>?)')
    createToken('TILDETRIM', `(\\s*)${src[t2.LONETILDE]}\\s+`, true)
    exports.tildeTrimReplace = '$1~'
    createToken('TILDE', `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAIN]}$`)
    createToken('TILDELOOSE', `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAINLOOSE]}$`)
    createToken('LONECARET', '(?:\\^)')
    createToken('CARETTRIM', `(\\s*)${src[t2.LONECARET]}\\s+`, true)
    exports.caretTrimReplace = '$1^'
    createToken('CARET', `^${src[t2.LONECARET]}${src[t2.XRANGEPLAIN]}$`)
    createToken('CARETLOOSE', `^${src[t2.LONECARET]}${src[t2.XRANGEPLAINLOOSE]}$`)
    createToken('COMPARATORLOOSE', `^${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]})$|^$`)
    createToken('COMPARATOR', `^${src[t2.GTLT]}\\s*(${src[t2.FULLPLAIN]})$|^$`)
    createToken('COMPARATORTRIM', `(\\s*)${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]}|${src[t2.XRANGEPLAIN]})`, true)
    exports.comparatorTrimReplace = '$1$2$3'
    createToken('HYPHENRANGE', `^\\s*(${src[t2.XRANGEPLAIN]})\\s+-\\s+(${src[t2.XRANGEPLAIN]})\\s*$`)
    createToken('HYPHENRANGELOOSE', `^\\s*(${src[t2.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t2.XRANGEPLAINLOOSE]})\\s*$`)
    createToken('STAR', '(<|>)?=?\\s*\\*')
    createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$')
    createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$')
  })(re$3, reExports)
  const opts = ['includePrerelease', 'loose', 'rtl']
  const parseOptions$2 = (options) =>
    !options
      ? {}
      : typeof options !== 'object'
      ? { loose: true }
      : opts
          .filter((k) => options[k])
          .reduce((o, k) => {
            o[k] = true
            return o
          }, {})
  var parseOptions_1 = parseOptions$2
  const numeric = /^[0-9]+$/
  const compareIdentifiers$1 = (a, b) => {
    const anum = numeric.test(a)
    const bnum = numeric.test(b)
    if (anum && bnum) {
      a = +a
      b = +b
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1
  }
  const rcompareIdentifiers = (a, b) => compareIdentifiers$1(b, a)
  var identifiers$1 = {
    compareIdentifiers: compareIdentifiers$1,
    rcompareIdentifiers,
  }
  const debug = debug_1
  const { MAX_LENGTH: MAX_LENGTH$1, MAX_SAFE_INTEGER } = constants$1
  const { re: re$2, t: t$2 } = reExports
  const parseOptions$1 = parseOptions_1
  const { compareIdentifiers } = identifiers$1
  let SemVer$d = class SemVer2 {
    constructor(version, options) {
      options = parseOptions$1(options)
      if (version instanceof SemVer2) {
        if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
          return version
        } else {
          version = version.version
        }
      } else if (typeof version !== 'string') {
        throw new TypeError(`Invalid Version: ${version}`)
      }
      if (version.length > MAX_LENGTH$1) {
        throw new TypeError(`version is longer than ${MAX_LENGTH$1} characters`)
      }
      debug('SemVer', version, options)
      this.options = options
      this.loose = !!options.loose
      this.includePrerelease = !!options.includePrerelease
      const m = version.trim().match(options.loose ? re$2[t$2.LOOSE] : re$2[t$2.FULL])
      if (!m) {
        throw new TypeError(`Invalid Version: ${version}`)
      }
      this.raw = version
      this.major = +m[1]
      this.minor = +m[2]
      this.patch = +m[3]
      if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
        throw new TypeError('Invalid major version')
      }
      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
        throw new TypeError('Invalid minor version')
      }
      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
        throw new TypeError('Invalid patch version')
      }
      if (!m[4]) {
        this.prerelease = []
      } else {
        this.prerelease = m[4].split('.').map((id) => {
          if (/^[0-9]+$/.test(id)) {
            const num = +id
            if (num >= 0 && num < MAX_SAFE_INTEGER) {
              return num
            }
          }
          return id
        })
      }
      this.build = m[5] ? m[5].split('.') : []
      this.format()
    }
    format() {
      this.version = `${this.major}.${this.minor}.${this.patch}`
      if (this.prerelease.length) {
        this.version += `-${this.prerelease.join('.')}`
      }
      return this.version
    }
    toString() {
      return this.version
    }
    compare(other) {
      debug('SemVer.compare', this.version, this.options, other)
      if (!(other instanceof SemVer2)) {
        if (typeof other === 'string' && other === this.version) {
          return 0
        }
        other = new SemVer2(other, this.options)
      }
      if (other.version === this.version) {
        return 0
      }
      return this.compareMain(other) || this.comparePre(other)
    }
    compareMain(other) {
      if (!(other instanceof SemVer2)) {
        other = new SemVer2(other, this.options)
      }
      return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch)
    }
    comparePre(other) {
      if (!(other instanceof SemVer2)) {
        other = new SemVer2(other, this.options)
      }
      if (this.prerelease.length && !other.prerelease.length) {
        return -1
      } else if (!this.prerelease.length && other.prerelease.length) {
        return 1
      } else if (!this.prerelease.length && !other.prerelease.length) {
        return 0
      }
      let i = 0
      do {
        const a = this.prerelease[i]
        const b = other.prerelease[i]
        debug('prerelease compare', i, a, b)
        if (a === void 0 && b === void 0) {
          return 0
        } else if (b === void 0) {
          return 1
        } else if (a === void 0) {
          return -1
        } else if (a === b) {
          continue
        } else {
          return compareIdentifiers(a, b)
        }
      } while (++i)
    }
    compareBuild(other) {
      if (!(other instanceof SemVer2)) {
        other = new SemVer2(other, this.options)
      }
      let i = 0
      do {
        const a = this.build[i]
        const b = other.build[i]
        debug('prerelease compare', i, a, b)
        if (a === void 0 && b === void 0) {
          return 0
        } else if (b === void 0) {
          return 1
        } else if (a === void 0) {
          return -1
        } else if (a === b) {
          continue
        } else {
          return compareIdentifiers(a, b)
        }
      } while (++i)
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(release, identifier) {
      switch (release) {
        case 'premajor':
          this.prerelease.length = 0
          this.patch = 0
          this.minor = 0
          this.major++
          this.inc('pre', identifier)
          break
        case 'preminor':
          this.prerelease.length = 0
          this.patch = 0
          this.minor++
          this.inc('pre', identifier)
          break
        case 'prepatch':
          this.prerelease.length = 0
          this.inc('patch', identifier)
          this.inc('pre', identifier)
          break
        case 'prerelease':
          if (this.prerelease.length === 0) {
            this.inc('patch', identifier)
          }
          this.inc('pre', identifier)
          break
        case 'major':
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++
          }
          this.minor = 0
          this.patch = 0
          this.prerelease = []
          break
        case 'minor':
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++
          }
          this.patch = 0
          this.prerelease = []
          break
        case 'patch':
          if (this.prerelease.length === 0) {
            this.patch++
          }
          this.prerelease = []
          break
        case 'pre':
          if (this.prerelease.length === 0) {
            this.prerelease = [0]
          } else {
            let i = this.prerelease.length
            while (--i >= 0) {
              if (typeof this.prerelease[i] === 'number') {
                this.prerelease[i]++
                i = -2
              }
            }
            if (i === -1) {
              this.prerelease.push(0)
            }
          }
          if (identifier) {
            if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = [identifier, 0]
              }
            } else {
              this.prerelease = [identifier, 0]
            }
          }
          break
        default:
          throw new Error(`invalid increment argument: ${release}`)
      }
      this.format()
      this.raw = this.version
      return this
    }
  }
  var semver$1 = SemVer$d
  const { MAX_LENGTH } = constants$1
  const { re: re$1, t: t$1 } = reExports
  const SemVer$c = semver$1
  const parseOptions = parseOptions_1
  const parse$6 = (version, options) => {
    options = parseOptions(options)
    if (version instanceof SemVer$c) {
      return version
    }
    if (typeof version !== 'string') {
      return null
    }
    if (version.length > MAX_LENGTH) {
      return null
    }
    const r = options.loose ? re$1[t$1.LOOSE] : re$1[t$1.FULL]
    if (!r.test(version)) {
      return null
    }
    try {
      return new SemVer$c(version, options)
    } catch (er) {
      return null
    }
  }
  var parse_1 = parse$6
  const parse$5 = parse_1
  const valid$2 = (version, options) => {
    const v = parse$5(version, options)
    return v ? v.version : null
  }
  var valid_1 = valid$2
  const parse$4 = parse_1
  const clean$1 = (version, options) => {
    const s = parse$4(version.trim().replace(/^[=v]+/, ''), options)
    return s ? s.version : null
  }
  var clean_1 = clean$1
  const SemVer$b = semver$1
  const inc$1 = (version, release, options, identifier) => {
    if (typeof options === 'string') {
      identifier = options
      options = void 0
    }
    try {
      return new SemVer$b(version instanceof SemVer$b ? version.version : version, options).inc(release, identifier).version
    } catch (er) {
      return null
    }
  }
  var inc_1 = inc$1
  const SemVer$a = semver$1
  const compare$b = (a, b, loose) => new SemVer$a(a, loose).compare(new SemVer$a(b, loose))
  var compare_1 = compare$b
  const compare$a = compare_1
  const eq$3 = (a, b, loose) => compare$a(a, b, loose) === 0
  var eq_1 = eq$3
  const parse$3 = parse_1
  const eq$2 = eq_1
  const diff$1 = (version1, version2) => {
    if (eq$2(version1, version2)) {
      return null
    } else {
      const v1 = parse$3(version1)
      const v2 = parse$3(version2)
      const hasPre = v1.prerelease.length || v2.prerelease.length
      const prefix = hasPre ? 'pre' : ''
      const defaultResult = hasPre ? 'prerelease' : ''
      for (const key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return prefix + key
          }
        }
      }
      return defaultResult
    }
  }
  var diff_1 = diff$1
  const SemVer$9 = semver$1
  const major$1 = (a, loose) => new SemVer$9(a, loose).major
  var major_1 = major$1
  const SemVer$8 = semver$1
  const minor$1 = (a, loose) => new SemVer$8(a, loose).minor
  var minor_1 = minor$1
  const SemVer$7 = semver$1
  const patch$1 = (a, loose) => new SemVer$7(a, loose).patch
  var patch_1 = patch$1
  const parse$2 = parse_1
  const prerelease$1 = (version, options) => {
    const parsed = parse$2(version, options)
    return parsed && parsed.prerelease.length ? parsed.prerelease : null
  }
  var prerelease_1 = prerelease$1
  const compare$9 = compare_1
  const rcompare$1 = (a, b, loose) => compare$9(b, a, loose)
  var rcompare_1 = rcompare$1
  const compare$8 = compare_1
  const compareLoose$1 = (a, b) => compare$8(a, b, true)
  var compareLoose_1 = compareLoose$1
  const SemVer$6 = semver$1
  const compareBuild$3 = (a, b, loose) => {
    const versionA = new SemVer$6(a, loose)
    const versionB = new SemVer$6(b, loose)
    return versionA.compare(versionB) || versionA.compareBuild(versionB)
  }
  var compareBuild_1 = compareBuild$3
  const compareBuild$2 = compareBuild_1
  const sort$1 = (list, loose) => list.sort((a, b) => compareBuild$2(a, b, loose))
  var sort_1 = sort$1
  const compareBuild$1 = compareBuild_1
  const rsort$1 = (list, loose) => list.sort((a, b) => compareBuild$1(b, a, loose))
  var rsort_1 = rsort$1
  const compare$7 = compare_1
  const gt$4 = (a, b, loose) => compare$7(a, b, loose) > 0
  var gt_1 = gt$4
  const compare$6 = compare_1
  const lt$3 = (a, b, loose) => compare$6(a, b, loose) < 0
  var lt_1 = lt$3
  const compare$5 = compare_1
  const neq$2 = (a, b, loose) => compare$5(a, b, loose) !== 0
  var neq_1 = neq$2
  const compare$4 = compare_1
  const gte$3 = (a, b, loose) => compare$4(a, b, loose) >= 0
  var gte_1 = gte$3
  const compare$3 = compare_1
  const lte$3 = (a, b, loose) => compare$3(a, b, loose) <= 0
  var lte_1 = lte$3
  const eq$1 = eq_1
  const neq$1 = neq_1
  const gt$3 = gt_1
  const gte$2 = gte_1
  const lt$2 = lt_1
  const lte$2 = lte_1
  const cmp$1 = (a, op, b, loose) => {
    switch (op) {
      case '===':
        if (typeof a === 'object') {
          a = a.version
        }
        if (typeof b === 'object') {
          b = b.version
        }
        return a === b
      case '!==':
        if (typeof a === 'object') {
          a = a.version
        }
        if (typeof b === 'object') {
          b = b.version
        }
        return a !== b
      case '':
      case '=':
      case '==':
        return eq$1(a, b, loose)
      case '!=':
        return neq$1(a, b, loose)
      case '>':
        return gt$3(a, b, loose)
      case '>=':
        return gte$2(a, b, loose)
      case '<':
        return lt$2(a, b, loose)
      case '<=':
        return lte$2(a, b, loose)
      default:
        throw new TypeError(`Invalid operator: ${op}`)
    }
  }
  var cmp_1 = cmp$1
  const SemVer$5 = semver$1
  const parse$1 = parse_1
  const { re, t } = reExports
  const coerce$1 = (version, options) => {
    if (version instanceof SemVer$5) {
      return version
    }
    if (typeof version === 'number') {
      version = String(version)
    }
    if (typeof version !== 'string') {
      return null
    }
    options = options || {}
    let match = null
    if (!options.rtl) {
      match = version.match(re[t.COERCE])
    } else {
      let next
      while ((next = re[t.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)) {
        if (!match || next.index + next[0].length !== match.index + match[0].length) {
          match = next
        }
        re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length
      }
      re[t.COERCERTL].lastIndex = -1
    }
    if (match === null) {
      return null
    }
    return parse$1(`${match[2]}.${match[3] || '0'}.${match[4] || '0'}`, options)
  }
  var coerce_1 = coerce$1
  var iterator
  var hasRequiredIterator
  function requireIterator() {
    if (hasRequiredIterator) return iterator
    hasRequiredIterator = 1
    iterator = function (Yallist2) {
      Yallist2.prototype[Symbol.iterator] = function* () {
        for (let walker = this.head; walker; walker = walker.next) {
          yield walker.value
        }
      }
    }
    return iterator
  }
  var yallist = Yallist$1
  Yallist$1.Node = Node
  Yallist$1.create = Yallist$1
  function Yallist$1(list) {
    var self2 = this
    if (!(self2 instanceof Yallist$1)) {
      self2 = new Yallist$1()
    }
    self2.tail = null
    self2.head = null
    self2.length = 0
    if (list && typeof list.forEach === 'function') {
      list.forEach(function (item) {
        self2.push(item)
      })
    } else if (arguments.length > 0) {
      for (var i = 0, l = arguments.length; i < l; i++) {
        self2.push(arguments[i])
      }
    }
    return self2
  }
  Yallist$1.prototype.removeNode = function (node) {
    if (node.list !== this) {
      throw new Error('removing node which does not belong to this list')
    }
    var next = node.next
    var prev = node.prev
    if (next) {
      next.prev = prev
    }
    if (prev) {
      prev.next = next
    }
    if (node === this.head) {
      this.head = next
    }
    if (node === this.tail) {
      this.tail = prev
    }
    node.list.length--
    node.next = null
    node.prev = null
    node.list = null
    return next
  }
  Yallist$1.prototype.unshiftNode = function (node) {
    if (node === this.head) {
      return
    }
    if (node.list) {
      node.list.removeNode(node)
    }
    var head = this.head
    node.list = this
    node.next = head
    if (head) {
      head.prev = node
    }
    this.head = node
    if (!this.tail) {
      this.tail = node
    }
    this.length++
  }
  Yallist$1.prototype.pushNode = function (node) {
    if (node === this.tail) {
      return
    }
    if (node.list) {
      node.list.removeNode(node)
    }
    var tail = this.tail
    node.list = this
    node.prev = tail
    if (tail) {
      tail.next = node
    }
    this.tail = node
    if (!this.head) {
      this.head = node
    }
    this.length++
  }
  Yallist$1.prototype.push = function () {
    for (var i = 0, l = arguments.length; i < l; i++) {
      push(this, arguments[i])
    }
    return this.length
  }
  Yallist$1.prototype.unshift = function () {
    for (var i = 0, l = arguments.length; i < l; i++) {
      unshift(this, arguments[i])
    }
    return this.length
  }
  Yallist$1.prototype.pop = function () {
    if (!this.tail) {
      return void 0
    }
    var res = this.tail.value
    this.tail = this.tail.prev
    if (this.tail) {
      this.tail.next = null
    } else {
      this.head = null
    }
    this.length--
    return res
  }
  Yallist$1.prototype.shift = function () {
    if (!this.head) {
      return void 0
    }
    var res = this.head.value
    this.head = this.head.next
    if (this.head) {
      this.head.prev = null
    } else {
      this.tail = null
    }
    this.length--
    return res
  }
  Yallist$1.prototype.forEach = function (fn, thisp) {
    thisp = thisp || this
    for (var walker = this.head, i = 0; walker !== null; i++) {
      fn.call(thisp, walker.value, i, this)
      walker = walker.next
    }
  }
  Yallist$1.prototype.forEachReverse = function (fn, thisp) {
    thisp = thisp || this
    for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
      fn.call(thisp, walker.value, i, this)
      walker = walker.prev
    }
  }
  Yallist$1.prototype.get = function (n) {
    for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
      walker = walker.next
    }
    if (i === n && walker !== null) {
      return walker.value
    }
  }
  Yallist$1.prototype.getReverse = function (n) {
    for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
      walker = walker.prev
    }
    if (i === n && walker !== null) {
      return walker.value
    }
  }
  Yallist$1.prototype.map = function (fn, thisp) {
    thisp = thisp || this
    var res = new Yallist$1()
    for (var walker = this.head; walker !== null; ) {
      res.push(fn.call(thisp, walker.value, this))
      walker = walker.next
    }
    return res
  }
  Yallist$1.prototype.mapReverse = function (fn, thisp) {
    thisp = thisp || this
    var res = new Yallist$1()
    for (var walker = this.tail; walker !== null; ) {
      res.push(fn.call(thisp, walker.value, this))
      walker = walker.prev
    }
    return res
  }
  Yallist$1.prototype.reduce = function (fn, initial) {
    var acc
    var walker = this.head
    if (arguments.length > 1) {
      acc = initial
    } else if (this.head) {
      walker = this.head.next
      acc = this.head.value
    } else {
      throw new TypeError('Reduce of empty list with no initial value')
    }
    for (var i = 0; walker !== null; i++) {
      acc = fn(acc, walker.value, i)
      walker = walker.next
    }
    return acc
  }
  Yallist$1.prototype.reduceReverse = function (fn, initial) {
    var acc
    var walker = this.tail
    if (arguments.length > 1) {
      acc = initial
    } else if (this.tail) {
      walker = this.tail.prev
      acc = this.tail.value
    } else {
      throw new TypeError('Reduce of empty list with no initial value')
    }
    for (var i = this.length - 1; walker !== null; i--) {
      acc = fn(acc, walker.value, i)
      walker = walker.prev
    }
    return acc
  }
  Yallist$1.prototype.toArray = function () {
    var arr = new Array(this.length)
    for (var i = 0, walker = this.head; walker !== null; i++) {
      arr[i] = walker.value
      walker = walker.next
    }
    return arr
  }
  Yallist$1.prototype.toArrayReverse = function () {
    var arr = new Array(this.length)
    for (var i = 0, walker = this.tail; walker !== null; i++) {
      arr[i] = walker.value
      walker = walker.prev
    }
    return arr
  }
  Yallist$1.prototype.slice = function (from, to) {
    to = to || this.length
    if (to < 0) {
      to += this.length
    }
    from = from || 0
    if (from < 0) {
      from += this.length
    }
    var ret = new Yallist$1()
    if (to < from || to < 0) {
      return ret
    }
    if (from < 0) {
      from = 0
    }
    if (to > this.length) {
      to = this.length
    }
    for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
      walker = walker.next
    }
    for (; walker !== null && i < to; i++, walker = walker.next) {
      ret.push(walker.value)
    }
    return ret
  }
  Yallist$1.prototype.sliceReverse = function (from, to) {
    to = to || this.length
    if (to < 0) {
      to += this.length
    }
    from = from || 0
    if (from < 0) {
      from += this.length
    }
    var ret = new Yallist$1()
    if (to < from || to < 0) {
      return ret
    }
    if (from < 0) {
      from = 0
    }
    if (to > this.length) {
      to = this.length
    }
    for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
      walker = walker.prev
    }
    for (; walker !== null && i > from; i--, walker = walker.prev) {
      ret.push(walker.value)
    }
    return ret
  }
  Yallist$1.prototype.splice = function (start, deleteCount, ...nodes) {
    if (start > this.length) {
      start = this.length - 1
    }
    if (start < 0) {
      start = this.length + start
    }
    for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
      walker = walker.next
    }
    var ret = []
    for (var i = 0; walker && i < deleteCount; i++) {
      ret.push(walker.value)
      walker = this.removeNode(walker)
    }
    if (walker === null) {
      walker = this.tail
    }
    if (walker !== this.head && walker !== this.tail) {
      walker = walker.prev
    }
    for (var i = 0; i < nodes.length; i++) {
      walker = insert(this, walker, nodes[i])
    }
    return ret
  }
  Yallist$1.prototype.reverse = function () {
    var head = this.head
    var tail = this.tail
    for (var walker = head; walker !== null; walker = walker.prev) {
      var p = walker.prev
      walker.prev = walker.next
      walker.next = p
    }
    this.head = tail
    this.tail = head
    return this
  }
  function insert(self2, node, value) {
    var inserted = node === self2.head ? new Node(value, null, node, self2) : new Node(value, node, node.next, self2)
    if (inserted.next === null) {
      self2.tail = inserted
    }
    if (inserted.prev === null) {
      self2.head = inserted
    }
    self2.length++
    return inserted
  }
  function push(self2, item) {
    self2.tail = new Node(item, self2.tail, null, self2)
    if (!self2.head) {
      self2.head = self2.tail
    }
    self2.length++
  }
  function unshift(self2, item) {
    self2.head = new Node(item, null, self2.head, self2)
    if (!self2.tail) {
      self2.tail = self2.head
    }
    self2.length++
  }
  function Node(value, prev, next, list) {
    if (!(this instanceof Node)) {
      return new Node(value, prev, next, list)
    }
    this.list = list
    this.value = value
    if (prev) {
      prev.next = this
      this.prev = prev
    } else {
      this.prev = null
    }
    if (next) {
      next.prev = this
      this.next = next
    } else {
      this.next = null
    }
  }
  try {
    requireIterator()(Yallist$1)
  } catch (er) {}
  const Yallist = yallist
  const MAX = Symbol('max')
  const LENGTH = Symbol('length')
  const LENGTH_CALCULATOR = Symbol('lengthCalculator')
  const ALLOW_STALE = Symbol('allowStale')
  const MAX_AGE = Symbol('maxAge')
  const DISPOSE = Symbol('dispose')
  const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet')
  const LRU_LIST = Symbol('lruList')
  const CACHE = Symbol('cache')
  const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet')
  const naiveLength = () => 1
  class LRUCache {
    constructor(options) {
      if (typeof options === 'number') options = { max: options }
      if (!options) options = {}
      if (options.max && (typeof options.max !== 'number' || options.max < 0)) throw new TypeError('max must be a non-negative number')
      this[MAX] = options.max || Infinity
      const lc = options.length || naiveLength
      this[LENGTH_CALCULATOR] = typeof lc !== 'function' ? naiveLength : lc
      this[ALLOW_STALE] = options.stale || false
      if (options.maxAge && typeof options.maxAge !== 'number') throw new TypeError('maxAge must be a number')
      this[MAX_AGE] = options.maxAge || 0
      this[DISPOSE] = options.dispose
      this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
      this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false
      this.reset()
    }
    // resize the cache when the max changes.
    set max(mL) {
      if (typeof mL !== 'number' || mL < 0) throw new TypeError('max must be a non-negative number')
      this[MAX] = mL || Infinity
      trim(this)
    }
    get max() {
      return this[MAX]
    }
    set allowStale(allowStale) {
      this[ALLOW_STALE] = !!allowStale
    }
    get allowStale() {
      return this[ALLOW_STALE]
    }
    set maxAge(mA) {
      if (typeof mA !== 'number') throw new TypeError('maxAge must be a non-negative number')
      this[MAX_AGE] = mA
      trim(this)
    }
    get maxAge() {
      return this[MAX_AGE]
    }
    // resize the cache when the lengthCalculator changes.
    set lengthCalculator(lC) {
      if (typeof lC !== 'function') lC = naiveLength
      if (lC !== this[LENGTH_CALCULATOR]) {
        this[LENGTH_CALCULATOR] = lC
        this[LENGTH] = 0
        this[LRU_LIST].forEach((hit) => {
          hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
          this[LENGTH] += hit.length
        })
      }
      trim(this)
    }
    get lengthCalculator() {
      return this[LENGTH_CALCULATOR]
    }
    get length() {
      return this[LENGTH]
    }
    get itemCount() {
      return this[LRU_LIST].length
    }
    rforEach(fn, thisp) {
      thisp = thisp || this
      for (let walker = this[LRU_LIST].tail; walker !== null; ) {
        const prev = walker.prev
        forEachStep(this, fn, walker, thisp)
        walker = prev
      }
    }
    forEach(fn, thisp) {
      thisp = thisp || this
      for (let walker = this[LRU_LIST].head; walker !== null; ) {
        const next = walker.next
        forEachStep(this, fn, walker, thisp)
        walker = next
      }
    }
    keys() {
      return this[LRU_LIST].toArray().map((k) => k.key)
    }
    values() {
      return this[LRU_LIST].toArray().map((k) => k.value)
    }
    reset() {
      if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
        this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value))
      }
      this[CACHE] = /* @__PURE__ */ new Map()
      this[LRU_LIST] = new Yallist()
      this[LENGTH] = 0
    }
    dump() {
      return this[LRU_LIST].map((hit) =>
        isStale(this, hit)
          ? false
          : {
              k: hit.key,
              v: hit.value,
              e: hit.now + (hit.maxAge || 0),
            },
      )
        .toArray()
        .filter((h) => h)
    }
    dumpLru() {
      return this[LRU_LIST]
    }
    set(key, value, maxAge) {
      maxAge = maxAge || this[MAX_AGE]
      if (maxAge && typeof maxAge !== 'number') throw new TypeError('maxAge must be a number')
      const now = maxAge ? Date.now() : 0
      const len = this[LENGTH_CALCULATOR](value, key)
      if (this[CACHE].has(key)) {
        if (len > this[MAX]) {
          del(this, this[CACHE].get(key))
          return false
        }
        const node = this[CACHE].get(key)
        const item = node.value
        if (this[DISPOSE]) {
          if (!this[NO_DISPOSE_ON_SET]) this[DISPOSE](key, item.value)
        }
        item.now = now
        item.maxAge = maxAge
        item.value = value
        this[LENGTH] += len - item.length
        item.length = len
        this.get(key)
        trim(this)
        return true
      }
      const hit = new Entry(key, value, len, now, maxAge)
      if (hit.length > this[MAX]) {
        if (this[DISPOSE]) this[DISPOSE](key, value)
        return false
      }
      this[LENGTH] += hit.length
      this[LRU_LIST].unshift(hit)
      this[CACHE].set(key, this[LRU_LIST].head)
      trim(this)
      return true
    }
    has(key) {
      if (!this[CACHE].has(key)) return false
      const hit = this[CACHE].get(key).value
      return !isStale(this, hit)
    }
    get(key) {
      return get(this, key, true)
    }
    peek(key) {
      return get(this, key, false)
    }
    pop() {
      const node = this[LRU_LIST].tail
      if (!node) return null
      del(this, node)
      return node.value
    }
    del(key) {
      del(this, this[CACHE].get(key))
    }
    load(arr) {
      this.reset()
      const now = Date.now()
      for (let l = arr.length - 1; l >= 0; l--) {
        const hit = arr[l]
        const expiresAt = hit.e || 0
        if (expiresAt === 0) this.set(hit.k, hit.v)
        else {
          const maxAge = expiresAt - now
          if (maxAge > 0) {
            this.set(hit.k, hit.v, maxAge)
          }
        }
      }
    }
    prune() {
      this[CACHE].forEach((value, key) => get(this, key, false))
    }
  }
  const get = (self2, key, doUse) => {
    const node = self2[CACHE].get(key)
    if (node) {
      const hit = node.value
      if (isStale(self2, hit)) {
        del(self2, node)
        if (!self2[ALLOW_STALE]) return void 0
      } else {
        if (doUse) {
          if (self2[UPDATE_AGE_ON_GET]) node.value.now = Date.now()
          self2[LRU_LIST].unshiftNode(node)
        }
      }
      return hit.value
    }
  }
  const isStale = (self2, hit) => {
    if (!hit || (!hit.maxAge && !self2[MAX_AGE])) return false
    const diff2 = Date.now() - hit.now
    return hit.maxAge ? diff2 > hit.maxAge : self2[MAX_AGE] && diff2 > self2[MAX_AGE]
  }
  const trim = (self2) => {
    if (self2[LENGTH] > self2[MAX]) {
      for (let walker = self2[LRU_LIST].tail; self2[LENGTH] > self2[MAX] && walker !== null; ) {
        const prev = walker.prev
        del(self2, walker)
        walker = prev
      }
    }
  }
  const del = (self2, node) => {
    if (node) {
      const hit = node.value
      if (self2[DISPOSE]) self2[DISPOSE](hit.key, hit.value)
      self2[LENGTH] -= hit.length
      self2[CACHE].delete(hit.key)
      self2[LRU_LIST].removeNode(node)
    }
  }
  class Entry {
    constructor(key, value, length, now, maxAge) {
      this.key = key
      this.value = value
      this.length = length
      this.now = now
      this.maxAge = maxAge || 0
    }
  }
  const forEachStep = (self2, fn, node, thisp) => {
    let hit = node.value
    if (isStale(self2, hit)) {
      del(self2, node)
      if (!self2[ALLOW_STALE]) hit = void 0
    }
    if (hit) fn.call(thisp, hit.value, hit.key, self2)
  }
  var lruCache = LRUCache
  var range
  var hasRequiredRange
  function requireRange() {
    if (hasRequiredRange) return range
    hasRequiredRange = 1
    class Range2 {
      constructor(range2, options) {
        options = parseOptions2(options)
        if (range2 instanceof Range2) {
          if (range2.loose === !!options.loose && range2.includePrerelease === !!options.includePrerelease) {
            return range2
          } else {
            return new Range2(range2.raw, options)
          }
        }
        if (range2 instanceof Comparator2) {
          this.raw = range2.value
          this.set = [[range2]]
          this.format()
          return this
        }
        this.options = options
        this.loose = !!options.loose
        this.includePrerelease = !!options.includePrerelease
        this.raw = range2
        this.set = range2
          .split('||')
          .map((r) => this.parseRange(r.trim()))
          .filter((c) => c.length)
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${range2}`)
        }
        if (this.set.length > 1) {
          const first = this.set[0]
          this.set = this.set.filter((c) => !isNullSet(c[0]))
          if (this.set.length === 0) {
            this.set = [first]
          } else if (this.set.length > 1) {
            for (const c of this.set) {
              if (c.length === 1 && isAny(c[0])) {
                this.set = [c]
                break
              }
            }
          }
        }
        this.format()
      }
      format() {
        this.range = this.set
          .map((comps) => {
            return comps.join(' ').trim()
          })
          .join('||')
          .trim()
        return this.range
      }
      toString() {
        return this.range
      }
      parseRange(range2) {
        range2 = range2.trim()
        const memoOpts = Object.keys(this.options).join(',')
        const memoKey = `parseRange:${memoOpts}:${range2}`
        const cached = cache.get(memoKey)
        if (cached) {
          return cached
        }
        const loose = this.options.loose
        const hr = loose ? re2[t2.HYPHENRANGELOOSE] : re2[t2.HYPHENRANGE]
        range2 = range2.replace(hr, hyphenReplace(this.options.includePrerelease))
        debug2('hyphen replace', range2)
        range2 = range2.replace(re2[t2.COMPARATORTRIM], comparatorTrimReplace)
        debug2('comparator trim', range2)
        range2 = range2.replace(re2[t2.TILDETRIM], tildeTrimReplace)
        range2 = range2.replace(re2[t2.CARETTRIM], caretTrimReplace)
        range2 = range2.split(/\s+/).join(' ')
        let rangeList = range2
          .split(' ')
          .map((comp) => parseComparator(comp, this.options))
          .join(' ')
          .split(/\s+/)
          .map((comp) => replaceGTE0(comp, this.options))
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug2('loose invalid filter', comp, this.options)
            return !!comp.match(re2[t2.COMPARATORLOOSE])
          })
        }
        debug2('range list', rangeList)
        const rangeMap = /* @__PURE__ */ new Map()
        const comparators = rangeList.map((comp) => new Comparator2(comp, this.options))
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp]
          }
          rangeMap.set(comp.value, comp)
        }
        if (rangeMap.size > 1 && rangeMap.has('')) {
          rangeMap.delete('')
        }
        const result = [...rangeMap.values()]
        cache.set(memoKey, result)
        return result
      }
      intersects(range2, options) {
        if (!(range2 instanceof Range2)) {
          throw new TypeError('a Range is required')
        }
        return this.set.some((thisComparators) => {
          return (
            isSatisfiable(thisComparators, options) &&
            range2.set.some((rangeComparators) => {
              return (
                isSatisfiable(rangeComparators, options) &&
                thisComparators.every((thisComparator) => {
                  return rangeComparators.every((rangeComparator) => {
                    return thisComparator.intersects(rangeComparator, options)
                  })
                })
              )
            })
          )
        })
      }
      // if ANY of the sets match ALL of its comparators, then pass
      test(version) {
        if (!version) {
          return false
        }
        if (typeof version === 'string') {
          try {
            version = new SemVer2(version, this.options)
          } catch (er) {
            return false
          }
        }
        for (let i = 0; i < this.set.length; i++) {
          if (testSet(this.set[i], version, this.options)) {
            return true
          }
        }
        return false
      }
    }
    range = Range2
    const LRU = lruCache
    const cache = new LRU({ max: 1e3 })
    const parseOptions2 = parseOptions_1
    const Comparator2 = requireComparator()
    const debug2 = debug_1
    const SemVer2 = semver$1
    const { re: re2, t: t2, comparatorTrimReplace, tildeTrimReplace, caretTrimReplace } = reExports
    const isNullSet = (c) => c.value === '<0.0.0-0'
    const isAny = (c) => c.value === ''
    const isSatisfiable = (comparators, options) => {
      let result = true
      const remainingComparators = comparators.slice()
      let testComparator = remainingComparators.pop()
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options)
        })
        testComparator = remainingComparators.pop()
      }
      return result
    }
    const parseComparator = (comp, options) => {
      debug2('comp', comp, options)
      comp = replaceCarets(comp, options)
      debug2('caret', comp)
      comp = replaceTildes(comp, options)
      debug2('tildes', comp)
      comp = replaceXRanges(comp, options)
      debug2('xrange', comp)
      comp = replaceStars(comp, options)
      debug2('stars', comp)
      return comp
    }
    const isX = (id) => !id || id.toLowerCase() === 'x' || id === '*'
    const replaceTildes = (comp, options) =>
      comp
        .trim()
        .split(/\s+/)
        .map((c) => {
          return replaceTilde(c, options)
        })
        .join(' ')
    const replaceTilde = (comp, options) => {
      const r = options.loose ? re2[t2.TILDELOOSE] : re2[t2.TILDE]
      return comp.replace(r, (_, M, m, p, pr) => {
        debug2('tilde', comp, _, M, m, p, pr)
        let ret
        if (isX(M)) {
          ret = ''
        } else if (isX(m)) {
          ret = `>=${M}.0.0 <${+M + 1}.0.0-0`
        } else if (isX(p)) {
          ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`
        } else if (pr) {
          debug2('replaceTilde pr', pr)
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`
        } else {
          ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`
        }
        debug2('tilde return', ret)
        return ret
      })
    }
    const replaceCarets = (comp, options) =>
      comp
        .trim()
        .split(/\s+/)
        .map((c) => {
          return replaceCaret(c, options)
        })
        .join(' ')
    const replaceCaret = (comp, options) => {
      debug2('caret', comp, options)
      const r = options.loose ? re2[t2.CARETLOOSE] : re2[t2.CARET]
      const z = options.includePrerelease ? '-0' : ''
      return comp.replace(r, (_, M, m, p, pr) => {
        debug2('caret', comp, _, M, m, p, pr)
        let ret
        if (isX(M)) {
          ret = ''
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`
        } else if (isX(p)) {
          if (M === '0') {
            ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`
          } else {
            ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`
          }
        } else if (pr) {
          debug2('replaceCaret pr', pr)
          if (M === '0') {
            if (m === '0') {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`
            }
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`
          }
        } else {
          debug2('no pr')
          if (M === '0') {
            if (m === '0') {
              ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`
            } else {
              ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`
            }
          } else {
            ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`
          }
        }
        debug2('caret return', ret)
        return ret
      })
    }
    const replaceXRanges = (comp, options) => {
      debug2('replaceXRanges', comp, options)
      return comp
        .split(/\s+/)
        .map((c) => {
          return replaceXRange(c, options)
        })
        .join(' ')
    }
    const replaceXRange = (comp, options) => {
      comp = comp.trim()
      const r = options.loose ? re2[t2.XRANGELOOSE] : re2[t2.XRANGE]
      return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
        debug2('xRange', comp, ret, gtlt, M, m, p, pr)
        const xM = isX(M)
        const xm = xM || isX(m)
        const xp = xm || isX(p)
        const anyX = xp
        if (gtlt === '=' && anyX) {
          gtlt = ''
        }
        pr = options.includePrerelease ? '-0' : ''
        if (xM) {
          if (gtlt === '>' || gtlt === '<') {
            ret = '<0.0.0-0'
          } else {
            ret = '*'
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m = 0
          }
          p = 0
          if (gtlt === '>') {
            gtlt = '>='
            if (xm) {
              M = +M + 1
              m = 0
              p = 0
            } else {
              m = +m + 1
              p = 0
            }
          } else if (gtlt === '<=') {
            gtlt = '<'
            if (xm) {
              M = +M + 1
            } else {
              m = +m + 1
            }
          }
          if (gtlt === '<') {
            pr = '-0'
          }
          ret = `${gtlt + M}.${m}.${p}${pr}`
        } else if (xm) {
          ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`
        } else if (xp) {
          ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`
        }
        debug2('xRange return', ret)
        return ret
      })
    }
    const replaceStars = (comp, options) => {
      debug2('replaceStars', comp, options)
      return comp.trim().replace(re2[t2.STAR], '')
    }
    const replaceGTE0 = (comp, options) => {
      debug2('replaceGTE0', comp, options)
      return comp.trim().replace(re2[options.includePrerelease ? t2.GTE0PRE : t2.GTE0], '')
    }
    const hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
      if (isX(fM)) {
        from = ''
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? '-0' : ''}`
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`
      } else if (fpr) {
        from = `>=${from}`
      } else {
        from = `>=${from}${incPr ? '-0' : ''}`
      }
      if (isX(tM)) {
        to = ''
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`
      } else {
        to = `<=${to}`
      }
      return `${from} ${to}`.trim()
    }
    const testSet = (set, version, options) => {
      for (let i = 0; i < set.length; i++) {
        if (!set[i].test(version)) {
          return false
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        for (let i = 0; i < set.length; i++) {
          debug2(set[i].semver)
          if (set[i].semver === Comparator2.ANY) {
            continue
          }
          if (set[i].semver.prerelease.length > 0) {
            const allowed = set[i].semver
            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true
            }
          }
        }
        return false
      }
      return true
    }
    return range
  }
  var comparator
  var hasRequiredComparator
  function requireComparator() {
    if (hasRequiredComparator) return comparator
    hasRequiredComparator = 1
    const ANY2 = Symbol('SemVer ANY')
    class Comparator2 {
      static get ANY() {
        return ANY2
      }
      constructor(comp, options) {
        options = parseOptions2(options)
        if (comp instanceof Comparator2) {
          if (comp.loose === !!options.loose) {
            return comp
          } else {
            comp = comp.value
          }
        }
        debug2('comparator', comp, options)
        this.options = options
        this.loose = !!options.loose
        this.parse(comp)
        if (this.semver === ANY2) {
          this.value = ''
        } else {
          this.value = this.operator + this.semver.version
        }
        debug2('comp', this)
      }
      parse(comp) {
        const r = this.options.loose ? re2[t2.COMPARATORLOOSE] : re2[t2.COMPARATOR]
        const m = comp.match(r)
        if (!m) {
          throw new TypeError(`Invalid comparator: ${comp}`)
        }
        this.operator = m[1] !== void 0 ? m[1] : ''
        if (this.operator === '=') {
          this.operator = ''
        }
        if (!m[2]) {
          this.semver = ANY2
        } else {
          this.semver = new SemVer2(m[2], this.options.loose)
        }
      }
      toString() {
        return this.value
      }
      test(version) {
        debug2('Comparator.test', version, this.options.loose)
        if (this.semver === ANY2 || version === ANY2) {
          return true
        }
        if (typeof version === 'string') {
          try {
            version = new SemVer2(version, this.options)
          } catch (er) {
            return false
          }
        }
        return cmp2(version, this.operator, this.semver, this.options)
      }
      intersects(comp, options) {
        if (!(comp instanceof Comparator2)) {
          throw new TypeError('a Comparator is required')
        }
        if (!options || typeof options !== 'object') {
          options = {
            loose: !!options,
            includePrerelease: false,
          }
        }
        if (this.operator === '') {
          if (this.value === '') {
            return true
          }
          return new Range2(comp.value, options).test(this.value)
        } else if (comp.operator === '') {
          if (comp.value === '') {
            return true
          }
          return new Range2(this.value, options).test(comp.semver)
        }
        const sameDirectionIncreasing = (this.operator === '>=' || this.operator === '>') && (comp.operator === '>=' || comp.operator === '>')
        const sameDirectionDecreasing = (this.operator === '<=' || this.operator === '<') && (comp.operator === '<=' || comp.operator === '<')
        const sameSemVer = this.semver.version === comp.semver.version
        const differentDirectionsInclusive = (this.operator === '>=' || this.operator === '<=') && (comp.operator === '>=' || comp.operator === '<=')
        const oppositeDirectionsLessThan =
          cmp2(this.semver, '<', comp.semver, options) &&
          (this.operator === '>=' || this.operator === '>') &&
          (comp.operator === '<=' || comp.operator === '<')
        const oppositeDirectionsGreaterThan =
          cmp2(this.semver, '>', comp.semver, options) &&
          (this.operator === '<=' || this.operator === '<') &&
          (comp.operator === '>=' || comp.operator === '>')
        return (
          sameDirectionIncreasing ||
          sameDirectionDecreasing ||
          (sameSemVer && differentDirectionsInclusive) ||
          oppositeDirectionsLessThan ||
          oppositeDirectionsGreaterThan
        )
      }
    }
    comparator = Comparator2
    const parseOptions2 = parseOptions_1
    const { re: re2, t: t2 } = reExports
    const cmp2 = cmp_1
    const debug2 = debug_1
    const SemVer2 = semver$1
    const Range2 = requireRange()
    return comparator
  }
  const Range$9 = requireRange()
  const satisfies$4 = (version, range2, options) => {
    try {
      range2 = new Range$9(range2, options)
    } catch (er) {
      return false
    }
    return range2.test(version)
  }
  var satisfies_1 = satisfies$4
  const Range$8 = requireRange()
  const toComparators$1 = (range2, options) =>
    new Range$8(range2, options).set.map((comp) =>
      comp
        .map((c) => c.value)
        .join(' ')
        .trim()
        .split(' '),
    )
  var toComparators_1 = toComparators$1
  const SemVer$4 = semver$1
  const Range$7 = requireRange()
  const maxSatisfying$1 = (versions, range2, options) => {
    let max = null
    let maxSV = null
    let rangeObj = null
    try {
      rangeObj = new Range$7(range2, options)
    } catch (er) {
      return null
    }
    versions.forEach((v) => {
      if (rangeObj.test(v)) {
        if (!max || maxSV.compare(v) === -1) {
          max = v
          maxSV = new SemVer$4(max, options)
        }
      }
    })
    return max
  }
  var maxSatisfying_1 = maxSatisfying$1
  const SemVer$3 = semver$1
  const Range$6 = requireRange()
  const minSatisfying$1 = (versions, range2, options) => {
    let min = null
    let minSV = null
    let rangeObj = null
    try {
      rangeObj = new Range$6(range2, options)
    } catch (er) {
      return null
    }
    versions.forEach((v) => {
      if (rangeObj.test(v)) {
        if (!min || minSV.compare(v) === 1) {
          min = v
          minSV = new SemVer$3(min, options)
        }
      }
    })
    return min
  }
  var minSatisfying_1 = minSatisfying$1
  const SemVer$2 = semver$1
  const Range$5 = requireRange()
  const gt$2 = gt_1
  const minVersion$1 = (range2, loose) => {
    range2 = new Range$5(range2, loose)
    let minver = new SemVer$2('0.0.0')
    if (range2.test(minver)) {
      return minver
    }
    minver = new SemVer$2('0.0.0-0')
    if (range2.test(minver)) {
      return minver
    }
    minver = null
    for (let i = 0; i < range2.set.length; ++i) {
      const comparators = range2.set[i]
      let setMin = null
      comparators.forEach((comparator2) => {
        const compver = new SemVer$2(comparator2.semver.version)
        switch (comparator2.operator) {
          case '>':
            if (compver.prerelease.length === 0) {
              compver.patch++
            } else {
              compver.prerelease.push(0)
            }
            compver.raw = compver.format()
          case '':
          case '>=':
            if (!setMin || gt$2(compver, setMin)) {
              setMin = compver
            }
            break
          case '<':
          case '<=':
            break
          default:
            throw new Error(`Unexpected operation: ${comparator2.operator}`)
        }
      })
      if (setMin && (!minver || gt$2(minver, setMin))) {
        minver = setMin
      }
    }
    if (minver && range2.test(minver)) {
      return minver
    }
    return null
  }
  var minVersion_1 = minVersion$1
  const Range$4 = requireRange()
  const validRange$1 = (range2, options) => {
    try {
      return new Range$4(range2, options).range || '*'
    } catch (er) {
      return null
    }
  }
  var valid$1 = validRange$1
  const SemVer$1 = semver$1
  const Comparator$2 = requireComparator()
  const { ANY: ANY$1 } = Comparator$2
  const Range$3 = requireRange()
  const satisfies$3 = satisfies_1
  const gt$1 = gt_1
  const lt$1 = lt_1
  const lte$1 = lte_1
  const gte$1 = gte_1
  const outside$3 = (version, range2, hilo, options) => {
    version = new SemVer$1(version, options)
    range2 = new Range$3(range2, options)
    let gtfn, ltefn, ltfn, comp, ecomp
    switch (hilo) {
      case '>':
        gtfn = gt$1
        ltefn = lte$1
        ltfn = lt$1
        comp = '>'
        ecomp = '>='
        break
      case '<':
        gtfn = lt$1
        ltefn = gte$1
        ltfn = gt$1
        comp = '<'
        ecomp = '<='
        break
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"')
    }
    if (satisfies$3(version, range2, options)) {
      return false
    }
    for (let i = 0; i < range2.set.length; ++i) {
      const comparators = range2.set[i]
      let high = null
      let low = null
      comparators.forEach((comparator2) => {
        if (comparator2.semver === ANY$1) {
          comparator2 = new Comparator$2('>=0.0.0')
        }
        high = high || comparator2
        low = low || comparator2
        if (gtfn(comparator2.semver, high.semver, options)) {
          high = comparator2
        } else if (ltfn(comparator2.semver, low.semver, options)) {
          low = comparator2
        }
      })
      if (high.operator === comp || high.operator === ecomp) {
        return false
      }
      if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
        return false
      } else if (low.operator === ecomp && ltfn(version, low.semver)) {
        return false
      }
    }
    return true
  }
  var outside_1 = outside$3
  const outside$2 = outside_1
  const gtr$1 = (version, range2, options) => outside$2(version, range2, '>', options)
  var gtr_1 = gtr$1
  const outside$1 = outside_1
  const ltr$1 = (version, range2, options) => outside$1(version, range2, '<', options)
  var ltr_1 = ltr$1
  const Range$2 = requireRange()
  const intersects$1 = (r1, r2, options) => {
    r1 = new Range$2(r1, options)
    r2 = new Range$2(r2, options)
    return r1.intersects(r2)
  }
  var intersects_1 = intersects$1
  const satisfies$2 = satisfies_1
  const compare$2 = compare_1
  var simplify = (versions, range2, options) => {
    const set = []
    let first = null
    let prev = null
    const v = versions.sort((a, b) => compare$2(a, b, options))
    for (const version of v) {
      const included = satisfies$2(version, range2, options)
      if (included) {
        prev = version
        if (!first) {
          first = version
        }
      } else {
        if (prev) {
          set.push([first, prev])
        }
        prev = null
        first = null
      }
    }
    if (first) {
      set.push([first, null])
    }
    const ranges = []
    for (const [min, max] of set) {
      if (min === max) {
        ranges.push(min)
      } else if (!max && min === v[0]) {
        ranges.push('*')
      } else if (!max) {
        ranges.push(`>=${min}`)
      } else if (min === v[0]) {
        ranges.push(`<=${max}`)
      } else {
        ranges.push(`${min} - ${max}`)
      }
    }
    const simplified = ranges.join(' || ')
    const original = typeof range2.raw === 'string' ? range2.raw : String(range2)
    return simplified.length < original.length ? simplified : range2
  }
  const Range$1 = requireRange()
  const Comparator$1 = requireComparator()
  const { ANY } = Comparator$1
  const satisfies$1 = satisfies_1
  const compare$1 = compare_1
  const subset$1 = (sub, dom, options = {}) => {
    if (sub === dom) {
      return true
    }
    sub = new Range$1(sub, options)
    dom = new Range$1(dom, options)
    let sawNonNull = false
    OUTER: for (const simpleSub of sub.set) {
      for (const simpleDom of dom.set) {
        const isSub = simpleSubset(simpleSub, simpleDom, options)
        sawNonNull = sawNonNull || isSub !== null
        if (isSub) {
          continue OUTER
        }
      }
      if (sawNonNull) {
        return false
      }
    }
    return true
  }
  const simpleSubset = (sub, dom, options) => {
    if (sub === dom) {
      return true
    }
    if (sub.length === 1 && sub[0].semver === ANY) {
      if (dom.length === 1 && dom[0].semver === ANY) {
        return true
      } else if (options.includePrerelease) {
        sub = [new Comparator$1('>=0.0.0-0')]
      } else {
        sub = [new Comparator$1('>=0.0.0')]
      }
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
      if (options.includePrerelease) {
        return true
      } else {
        dom = [new Comparator$1('>=0.0.0')]
      }
    }
    const eqSet = /* @__PURE__ */ new Set()
    let gt2, lt2
    for (const c of sub) {
      if (c.operator === '>' || c.operator === '>=') {
        gt2 = higherGT(gt2, c, options)
      } else if (c.operator === '<' || c.operator === '<=') {
        lt2 = lowerLT(lt2, c, options)
      } else {
        eqSet.add(c.semver)
      }
    }
    if (eqSet.size > 1) {
      return null
    }
    let gtltComp
    if (gt2 && lt2) {
      gtltComp = compare$1(gt2.semver, lt2.semver, options)
      if (gtltComp > 0) {
        return null
      } else if (gtltComp === 0 && (gt2.operator !== '>=' || lt2.operator !== '<=')) {
        return null
      }
    }
    for (const eq2 of eqSet) {
      if (gt2 && !satisfies$1(eq2, String(gt2), options)) {
        return null
      }
      if (lt2 && !satisfies$1(eq2, String(lt2), options)) {
        return null
      }
      for (const c of dom) {
        if (!satisfies$1(eq2, String(c), options)) {
          return false
        }
      }
      return true
    }
    let higher, lower
    let hasDomLT, hasDomGT
    let needDomLTPre = lt2 && !options.includePrerelease && lt2.semver.prerelease.length ? lt2.semver : false
    let needDomGTPre = gt2 && !options.includePrerelease && gt2.semver.prerelease.length ? gt2.semver : false
    if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt2.operator === '<' && needDomLTPre.prerelease[0] === 0) {
      needDomLTPre = false
    }
    for (const c of dom) {
      hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>='
      hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<='
      if (gt2) {
        if (needDomGTPre) {
          if (
            c.semver.prerelease &&
            c.semver.prerelease.length &&
            c.semver.major === needDomGTPre.major &&
            c.semver.minor === needDomGTPre.minor &&
            c.semver.patch === needDomGTPre.patch
          ) {
            needDomGTPre = false
          }
        }
        if (c.operator === '>' || c.operator === '>=') {
          higher = higherGT(gt2, c, options)
          if (higher === c && higher !== gt2) {
            return false
          }
        } else if (gt2.operator === '>=' && !satisfies$1(gt2.semver, String(c), options)) {
          return false
        }
      }
      if (lt2) {
        if (needDomLTPre) {
          if (
            c.semver.prerelease &&
            c.semver.prerelease.length &&
            c.semver.major === needDomLTPre.major &&
            c.semver.minor === needDomLTPre.minor &&
            c.semver.patch === needDomLTPre.patch
          ) {
            needDomLTPre = false
          }
        }
        if (c.operator === '<' || c.operator === '<=') {
          lower = lowerLT(lt2, c, options)
          if (lower === c && lower !== lt2) {
            return false
          }
        } else if (lt2.operator === '<=' && !satisfies$1(lt2.semver, String(c), options)) {
          return false
        }
      }
      if (!c.operator && (lt2 || gt2) && gtltComp !== 0) {
        return false
      }
    }
    if (gt2 && hasDomLT && !lt2 && gtltComp !== 0) {
      return false
    }
    if (lt2 && hasDomGT && !gt2 && gtltComp !== 0) {
      return false
    }
    if (needDomGTPre || needDomLTPre) {
      return false
    }
    return true
  }
  const higherGT = (a, b, options) => {
    if (!a) {
      return b
    }
    const comp = compare$1(a.semver, b.semver, options)
    return comp > 0 ? a : comp < 0 ? b : b.operator === '>' && a.operator === '>=' ? b : a
  }
  const lowerLT = (a, b, options) => {
    if (!a) {
      return b
    }
    const comp = compare$1(a.semver, b.semver, options)
    return comp < 0 ? a : comp > 0 ? b : b.operator === '<' && a.operator === '<=' ? b : a
  }
  var subset_1 = subset$1
  const internalRe = reExports
  const constants = constants$1
  const SemVer = semver$1
  const identifiers = identifiers$1
  const parse = parse_1
  const valid = valid_1
  const clean = clean_1
  const inc = inc_1
  const diff = diff_1
  const major = major_1
  const minor = minor_1
  const patch = patch_1
  const prerelease = prerelease_1
  const compare = compare_1
  const rcompare = rcompare_1
  const compareLoose = compareLoose_1
  const compareBuild = compareBuild_1
  const sort = sort_1
  const rsort = rsort_1
  const gt = gt_1
  const lt = lt_1
  const eq = eq_1
  const neq = neq_1
  const gte = gte_1
  const lte = lte_1
  const cmp = cmp_1
  const coerce = coerce_1
  const Comparator = requireComparator()
  const Range = requireRange()
  const satisfies = satisfies_1
  const toComparators = toComparators_1
  const maxSatisfying = maxSatisfying_1
  const minSatisfying = minSatisfying_1
  const minVersion = minVersion_1
  const validRange = valid$1
  const outside = outside_1
  const gtr = gtr_1
  const ltr = ltr_1
  const intersects = intersects_1
  const simplifyRange = simplify
  const subset = subset_1
  var semver = {
    parse,
    valid,
    clean,
    inc,
    diff,
    major,
    minor,
    patch,
    prerelease,
    compare,
    rcompare,
    compareLoose,
    compareBuild,
    sort,
    rsort,
    gt,
    lt,
    eq,
    neq,
    gte,
    lte,
    cmp,
    coerce,
    Comparator,
    Range,
    satisfies,
    toComparators,
    maxSatisfying,
    minSatisfying,
    minVersion,
    validRange,
    outside,
    gtr,
    ltr,
    intersects,
    simplifyRange,
    subset,
    SemVer,
    re: internalRe.re,
    src: internalRe.src,
    tokens: internalRe.t,
    SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
    compareIdentifiers: identifiers.compareIdentifiers,
    rcompareIdentifiers: identifiers.rcompareIdentifiers,
  }
  var monkeyWindow = window
  var GM_info = /* @__PURE__ */ (() => monkeyWindow.GM_info)()
  var GM_xmlhttpRequest = /* @__PURE__ */ (() => monkeyWindow.GM_xmlhttpRequest)()
  console.info(`%c[${GM_info.script.name}]`, 'color: #409eff; font-weight: bold; font-size: 32px;', GM_info)
  const checkVersion = async () => {
    {
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
            setTimeout(() => checkVersion(), 1e4)
          }
        },
      })
    }
  }
  checkVersion()
  vue.createApp(App).mount(
    (() => {
      const app = document.createElement('div')
      document.body.append(app)
      return app
    })(),
  )
})(Vue)
