// ==UserScript==
// @name       @leo/table-to-json
// @namespace  https://xuebin.me/
// @version    0.0.1
// @author     monkey
// @icon       https://vitejs.dev/logo.svg
// @updateURL  https://gitee.com/mr.leo/userscript/raw/main/@leo/table-to-json.user.js
// @match      *://wiki.zhaopin.com/*
// @require    https://cdn.jsdelivr.net/npm/core-js-bundle@latest/minified.js
// @require    https://cdn.jsdelivr.net/npm/table-to-json@1.0.0/lib/jquery.tabletojson.min.js
// @require    https://cdn.jsdelivr.net/npm/vue@3.2.45/dist/vue.global.prod.js
// ==/UserScript==

(e=>{const o=document.createElement("style");o.dataset.source="vite-plugin-monkey",o.innerText=e,document.head.appendChild(o)})(":root{font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;place-items:center;min-width:320px;min-height:100vh}h1{font-size:3.2em;line-height:1.1}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;-webkit-transition:border-color .25s;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}.card{padding:2em}#app{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}.inno-userscript_invoice[data-v-5c90b940]{position:fixed;z-index:9999;background-color:#fff;-webkit-box-shadow:5px 5px 5px #ccc,-5px -5px 5px #ccc;box-shadow:5px 5px 5px #ccc,-5px -5px 5px #ccc;max-height:80%;overflow:auto}.inno-userscript_invoice .drag[data-v-5c90b940]{cursor:move;font-size:16px;background:#ccc;padding:8px}.btn[data-v-5c90b940]{cursor:pointer}.copy[data-v-5c90b940]{cursor:copy}details[data-v-5c90b940]{border:1px solid #aaa;border-radius:4px;padding:.5em .5em 0}summary[data-v-5c90b940]{font-weight:700;margin:-.5em -.5em 0;padding:.5em;cursor:pointer}details[open][data-v-5c90b940]{padding:.5em}details[open] summary[data-v-5c90b940]{border-bottom:1px solid #aaa;margin-bottom:.5em}");

(function(vue) {
  "use strict";
  const style = "";
  var _a;
  const isClient = typeof window !== "undefined";
  const isFunction = (val) => typeof val === "function";
  const isString = (val) => typeof val === "string";
  const noop = () => {
  };
  isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
  function resolveUnref(r) {
    return typeof r === "function" ? r() : vue.unref(r);
  }
  function createFilterWrapper(filter, fn) {
    function wrapper(...args) {
      return new Promise((resolve, reject) => {
        Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
      });
    }
    return wrapper;
  }
  const bypassFilter = (invoke) => {
    return invoke();
  };
  function pausableFilter(extendFilter = bypassFilter) {
    const isActive = vue.ref(true);
    function pause() {
      isActive.value = false;
    }
    function resume() {
      isActive.value = true;
    }
    const eventFilter = (...args) => {
      if (isActive.value)
        extendFilter(...args);
    };
    return { isActive: vue.readonly(isActive), pause, resume, eventFilter };
  }
  function identity(arg) {
    return arg;
  }
  function tryOnScopeDispose(fn) {
    if (vue.getCurrentScope()) {
      vue.onScopeDispose(fn);
      return true;
    }
    return false;
  }
  var __defProp$7 = Object.defineProperty;
  var __defProps$5 = Object.defineProperties;
  var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
  var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
  var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$7 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$9.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    if (__getOwnPropSymbols$9)
      for (var prop of __getOwnPropSymbols$9(b)) {
        if (__propIsEnum$9.call(b, prop))
          __defNormalProp$7(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b));
  function toRefs(objectRef) {
    if (!vue.isRef(objectRef))
      return vue.toRefs(objectRef);
    const result = Array.isArray(objectRef.value) ? new Array(objectRef.value.length) : {};
    for (const key in objectRef.value) {
      result[key] = vue.customRef(() => ({
        get() {
          return objectRef.value[key];
        },
        set(v) {
          if (Array.isArray(objectRef.value)) {
            const copy = [...objectRef.value];
            copy[key] = v;
            objectRef.value = copy;
          } else {
            const newObject = __spreadProps$5(__spreadValues$7({}, objectRef.value), { [key]: v });
            Object.setPrototypeOf(newObject, objectRef.value);
            objectRef.value = newObject;
          }
        }
      }));
    }
    return result;
  }
  function tryOnMounted(fn, sync = true) {
    if (vue.getCurrentInstance())
      vue.onMounted(fn);
    else if (sync)
      fn();
    else
      vue.nextTick(fn);
  }
  function useTimeoutFn(cb, interval, options = {}) {
    const {
      immediate = true
    } = options;
    const isPending = vue.ref(false);
    let timer = null;
    function clear() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }
    function stop() {
      isPending.value = false;
      clear();
    }
    function start(...args) {
      clear();
      isPending.value = true;
      timer = setTimeout(() => {
        isPending.value = false;
        timer = null;
        cb(...args);
      }, resolveUnref(interval));
    }
    if (immediate) {
      isPending.value = true;
      if (isClient)
        start();
    }
    tryOnScopeDispose(stop);
    return {
      isPending: vue.readonly(isPending),
      start,
      stop
    };
  }
  var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
  var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
  var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
  var __objRest$5 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$6)
      for (var prop of __getOwnPropSymbols$6(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function watchWithFilter(source, cb, options = {}) {
    const _a2 = options, {
      eventFilter = bypassFilter
    } = _a2, watchOptions = __objRest$5(_a2, [
      "eventFilter"
    ]);
    return vue.watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
  }
  var __defProp$2 = Object.defineProperty;
  var __defProps$2 = Object.defineProperties;
  var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
  var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
  var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$2 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    if (__getOwnPropSymbols$2)
      for (var prop of __getOwnPropSymbols$2(b)) {
        if (__propIsEnum$2.call(b, prop))
          __defNormalProp$2(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
  var __objRest$1 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$2)
      for (var prop of __getOwnPropSymbols$2(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function watchPausable(source, cb, options = {}) {
    const _a2 = options, {
      eventFilter: filter
    } = _a2, watchOptions = __objRest$1(_a2, [
      "eventFilter"
    ]);
    const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
    const stop = watchWithFilter(source, cb, __spreadProps$2(__spreadValues$2({}, watchOptions), {
      eventFilter
    }));
    return { stop, pause, resume, isActive };
  }
  function unrefElement(elRef) {
    var _a2;
    const plain = resolveUnref(elRef);
    return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
  }
  const defaultWindow = isClient ? window : void 0;
  isClient ? window.document : void 0;
  const defaultNavigator = isClient ? window.navigator : void 0;
  isClient ? window.location : void 0;
  function useEventListener(...args) {
    let target;
    let events;
    let listeners;
    let options;
    if (isString(args[0]) || Array.isArray(args[0])) {
      [events, listeners, options] = args;
      target = defaultWindow;
    } else {
      [target, events, listeners, options] = args;
    }
    if (!target)
      return noop;
    if (!Array.isArray(events))
      events = [events];
    if (!Array.isArray(listeners))
      listeners = [listeners];
    const cleanups = [];
    const cleanup = () => {
      cleanups.forEach((fn) => fn());
      cleanups.length = 0;
    };
    const register = (el, event, listener) => {
      el.addEventListener(event, listener, options);
      return () => el.removeEventListener(event, listener, options);
    };
    const stopWatch = vue.watch(() => unrefElement(target), (el) => {
      cleanup();
      if (!el)
        return;
      cleanups.push(...events.flatMap((event) => {
        return listeners.map((listener) => register(el, event, listener));
      }));
    }, { immediate: true, flush: "post" });
    const stop = () => {
      stopWatch();
      cleanup();
    };
    tryOnScopeDispose(stop);
    return stop;
  }
  function useSupported(callback, sync = false) {
    const isSupported = vue.ref();
    const update = () => isSupported.value = Boolean(callback());
    update();
    tryOnMounted(update, sync);
    return isSupported;
  }
  function useClipboard(options = {}) {
    const {
      navigator = defaultNavigator,
      read = false,
      source,
      copiedDuring = 1500,
      legacy = false
    } = options;
    const events = ["copy", "cut"];
    const isClipboardApiSupported = useSupported(() => navigator && "clipboard" in navigator);
    const isSupported = vue.computed(() => isClipboardApiSupported.value || legacy);
    const text = vue.ref("");
    const copied = vue.ref(false);
    const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
    function updateText() {
      if (isClipboardApiSupported.value) {
        navigator.clipboard.readText().then((value) => {
          text.value = value;
        });
      } else {
        text.value = legacyRead();
      }
    }
    if (isSupported.value && read) {
      for (const event of events)
        useEventListener(event, updateText);
    }
    async function copy(value = resolveUnref(source)) {
      if (isSupported.value && value != null) {
        if (isClipboardApiSupported.value)
          await navigator.clipboard.writeText(value);
        else
          legacyCopy(value);
        text.value = value;
        copied.value = true;
        timeout.start();
      }
    }
    function legacyCopy(value) {
      const ta = document.createElement("textarea");
      ta.value = value != null ? value : "";
      ta.style.position = "absolute";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    function legacyRead() {
      var _a2, _b, _c;
      return (_c = (_b = (_a2 = document == null ? void 0 : document.getSelection) == null ? void 0 : _a2.call(document)) == null ? void 0 : _b.toString()) != null ? _c : "";
    }
    return {
      isSupported,
      text,
      copied,
      copy
    };
  }
  const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  const globalKey = "__vueuse_ssr_handlers__";
  _global[globalKey] = _global[globalKey] || {};
  const handlers = _global[globalKey];
  function getSSRHandler(key, fallback) {
    return handlers[key] || fallback;
  }
  function guessSerializerType(rawInit) {
    return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
  }
  var __defProp$j = Object.defineProperty;
  var __getOwnPropSymbols$l = Object.getOwnPropertySymbols;
  var __hasOwnProp$l = Object.prototype.hasOwnProperty;
  var __propIsEnum$l = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$j = (obj, key, value) => key in obj ? __defProp$j(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$j = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$l.call(b, prop))
        __defNormalProp$j(a, prop, b[prop]);
    if (__getOwnPropSymbols$l)
      for (var prop of __getOwnPropSymbols$l(b)) {
        if (__propIsEnum$l.call(b, prop))
          __defNormalProp$j(a, prop, b[prop]);
      }
    return a;
  };
  const StorageSerializers = {
    boolean: {
      read: (v) => v === "true",
      write: (v) => String(v)
    },
    object: {
      read: (v) => JSON.parse(v),
      write: (v) => JSON.stringify(v)
    },
    number: {
      read: (v) => Number.parseFloat(v),
      write: (v) => String(v)
    },
    any: {
      read: (v) => v,
      write: (v) => String(v)
    },
    string: {
      read: (v) => v,
      write: (v) => String(v)
    },
    map: {
      read: (v) => new Map(JSON.parse(v)),
      write: (v) => JSON.stringify(Array.from(v.entries()))
    },
    set: {
      read: (v) => new Set(JSON.parse(v)),
      write: (v) => JSON.stringify(Array.from(v))
    },
    date: {
      read: (v) => new Date(v),
      write: (v) => v.toISOString()
    }
  };
  function useStorage(key, defaults, storage, options = {}) {
    var _a2;
    const {
      flush = "pre",
      deep = true,
      listenToStorageChanges = true,
      writeDefaults = true,
      mergeDefaults = false,
      shallow,
      window: window2 = defaultWindow,
      eventFilter,
      onError = (e) => {
        console.error(e);
      }
    } = options;
    const data = (shallow ? vue.shallowRef : vue.ref)(defaults);
    if (!storage) {
      try {
        storage = getSSRHandler("getDefaultStorage", () => {
          var _a22;
          return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage;
        })();
      } catch (e) {
        onError(e);
      }
    }
    if (!storage)
      return data;
    const rawInit = resolveUnref(defaults);
    const type = guessSerializerType(rawInit);
    const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type];
    const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, () => write(data.value), { flush, deep, eventFilter });
    if (window2 && listenToStorageChanges)
      useEventListener(window2, "storage", update);
    update();
    return data;
    function write(v) {
      try {
        if (v == null) {
          storage.removeItem(key);
        } else {
          const serialized = serializer.write(v);
          const oldValue = storage.getItem(key);
          if (oldValue !== serialized) {
            storage.setItem(key, serialized);
            if (window2) {
              window2 == null ? void 0 : window2.dispatchEvent(new StorageEvent("storage", {
                key,
                oldValue,
                newValue: serialized,
                storageArea: storage
              }));
            }
          }
        }
      } catch (e) {
        onError(e);
      }
    }
    function read(event) {
      const rawValue = event ? event.newValue : storage.getItem(key);
      if (rawValue == null) {
        if (writeDefaults && rawInit !== null)
          storage.setItem(key, serializer.write(rawInit));
        return rawInit;
      } else if (!event && mergeDefaults) {
        const value = serializer.read(rawValue);
        if (isFunction(mergeDefaults))
          return mergeDefaults(value, rawInit);
        else if (type === "object" && !Array.isArray(value))
          return __spreadValues$j(__spreadValues$j({}, rawInit), value);
        return value;
      } else if (typeof rawValue !== "string") {
        return rawValue;
      } else {
        return serializer.read(rawValue);
      }
    }
    function update(event) {
      if (event && event.storageArea !== storage)
        return;
      if (event && event.key == null) {
        data.value = rawInit;
        return;
      }
      if (event && event.key !== key)
        return;
      pauseWatch();
      try {
        data.value = read(event);
      } catch (e) {
        onError(e);
      } finally {
        if (event)
          vue.nextTick(resumeWatch);
        else
          resumeWatch();
      }
    }
  }
  var __defProp$e = Object.defineProperty;
  var __defProps$4 = Object.defineProperties;
  var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
  var __hasOwnProp$g = Object.prototype.hasOwnProperty;
  var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$e = (obj, key, value) => key in obj ? __defProp$e(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$e = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$g.call(b, prop))
        __defNormalProp$e(a, prop, b[prop]);
    if (__getOwnPropSymbols$g)
      for (var prop of __getOwnPropSymbols$g(b)) {
        if (__propIsEnum$g.call(b, prop))
          __defNormalProp$e(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
  function useDraggable(target, options = {}) {
    var _a2, _b, _c;
    const draggingElement = (_a2 = options.draggingElement) != null ? _a2 : defaultWindow;
    const draggingHandle = (_b = options.handle) != null ? _b : target;
    const position = vue.ref((_c = resolveUnref(options.initialValue)) != null ? _c : { x: 0, y: 0 });
    const pressedDelta = vue.ref();
    const filterEvent = (e) => {
      if (options.pointerTypes)
        return options.pointerTypes.includes(e.pointerType);
      return true;
    };
    const handleEvent = (e) => {
      if (resolveUnref(options.preventDefault))
        e.preventDefault();
      if (resolveUnref(options.stopPropagation))
        e.stopPropagation();
    };
    const start = (e) => {
      var _a22;
      if (!filterEvent(e))
        return;
      if (resolveUnref(options.exact) && e.target !== resolveUnref(target))
        return;
      const rect = resolveUnref(target).getBoundingClientRect();
      const pos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
      if (((_a22 = options.onStart) == null ? void 0 : _a22.call(options, pos, e)) === false)
        return;
      pressedDelta.value = pos;
      handleEvent(e);
    };
    const move = (e) => {
      var _a22;
      if (!filterEvent(e))
        return;
      if (!pressedDelta.value)
        return;
      position.value = {
        x: e.clientX - pressedDelta.value.x,
        y: e.clientY - pressedDelta.value.y
      };
      (_a22 = options.onMove) == null ? void 0 : _a22.call(options, position.value, e);
      handleEvent(e);
    };
    const end = (e) => {
      var _a22;
      if (!filterEvent(e))
        return;
      if (!pressedDelta.value)
        return;
      pressedDelta.value = void 0;
      (_a22 = options.onEnd) == null ? void 0 : _a22.call(options, position.value, e);
      handleEvent(e);
    };
    if (isClient) {
      useEventListener(draggingHandle, "pointerdown", start, true);
      useEventListener(draggingElement, "pointermove", move, true);
      useEventListener(draggingElement, "pointerup", end, true);
    }
    return __spreadProps$4(__spreadValues$e({}, toRefs(position)), {
      position,
      isDragging: vue.computed(() => !!pressedDelta.value),
      style: vue.computed(() => `left:${position.value.x}px;top:${position.value.y}px;`)
    });
  }
  var SwipeDirection;
  (function(SwipeDirection2) {
    SwipeDirection2["UP"] = "UP";
    SwipeDirection2["RIGHT"] = "RIGHT";
    SwipeDirection2["DOWN"] = "DOWN";
    SwipeDirection2["LEFT"] = "LEFT";
    SwipeDirection2["NONE"] = "NONE";
  })(SwipeDirection || (SwipeDirection = {}));
  var __defProp = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
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
    easeInOutBack: [0.68, -0.6, 0.32, 1.6]
  };
  __spreadValues({
    linear: identity
  }, _TransitionPresets);
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      var _a2;
      const drag = vue.ref();
      let iframe = document.createElement("iframe");
      iframe.style.display = "none";
      document.body.appendChild(iframe);
      console = (_a2 = iframe == null ? void 0 : iframe.contentWindow) == null ? void 0 : _a2.console;
      window.console = console;
      const initialValue = useStorage("inno-userscript_invoice_style", { x: 10, y: 10 });
      const { position, style: style2 } = useDraggable(drag, { initialValue });
      vue.watch(
        () => style2.value,
        () => initialValue.value = position.value
      );
      const typeReplace = (type) => type.replace(/^string$/i, "string").replace(/^int|long$/i, "number").replace(/^List<([^>]*)>$/i, "$1[]");
      const tables = vue.ref();
      const output = vue.ref();
      const TypeRequest = vue.ref("");
      const TypeResponse = vue.ref("");
      const getTables = () => {
        tables.value = jQuery("table");
      };
      const autoRefreshTables = setInterval(() => {
        var _a3;
        getTables();
        if ((_a3 = tables.value) == null ? void 0 : _a3.length)
          clearInterval(autoRefreshTables);
      }, 1e3);
      vue.watch(
        () => tables.value,
        (v) => {
          console.info(`[LOG] -> 页面表格渲染更新`, v);
          output.value = {};
          Array.from(tables.value || []).forEach((element) => {
            const name = jQuery(element).parent().prev().text();
            const json = jQuery(element).tableToJSON();
            if (/body参数/gi.test(name)) {
              const interfaceFieldStr = json.map((item) => {
                if ("参数名" === item["参数名"])
                  return "";
                if (/^page.?/.test(item["参数名"]))
                  return "";
                return [item["说明"] ? `  /** ${item["说明"]} */` : "", `  ${item["参数名"]}: ${typeReplace(item["类型"])}`].filter(Boolean).join("\n");
              }).filter(Boolean);
              TypeRequest.value = [`export interface Request {`, ...interfaceFieldStr, `}`].join("\n");
              console.info(`[LOG] -> TypeRequest`, TypeRequest.value);
            } else if (/字段说明/gi.test(name) || /^\w+$/i.test(name)) {
              const interfaceFieldStr = json.map((item) => {
                return [item["说明"] ? `  /** ${item["说明"]} */` : "", `  ${item["字段名称"]}: ${typeReplace(item["类型"])}`].filter(Boolean).join("\n");
              }).filter(Boolean);
              TypeResponse.value += [`export interface ${/^\w+$/i.test(name) ? name : "Response"} {`, ...interfaceFieldStr, `}`].join("\n") + "\n\n";
              console.info(`[LOG] -> TypeResponse`, TypeResponse.value);
            } else {
              if (name) {
                output.value[name] = json;
              }
            }
          });
        }
      );
      const { copy, isSupported } = useClipboard();
      return (_ctx, _cache) => {
        return tables.value ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          ref: "root",
          class: "inno-userscript_invoice",
          style: vue.normalizeStyle(vue.unref(style2))
        }, [
          vue.createElementVNode("h1", {
            ref_key: "drag",
            ref: drag,
            class: "drag"
          }, [
            vue.createTextVNode(" Table to JSON "),
            vue.createElementVNode("a", {
              class: "btn",
              onClick: _cache[0] || (_cache[0] = ($event) => getTables())
            }, "重新解析")
          ], 512),
          vue.createElementVNode("pre", null, vue.toDisplayString(JSON.stringify(output.value, null, 2)), 1),
          vue.createElementVNode("details", null, [
            vue.createElementVNode("summary", null, [
              vue.createTextVNode("Request "),
              vue.unref(isSupported) ? (vue.openBlock(), vue.createElementBlock("a", {
                key: 0,
                class: "copy",
                onClick: _cache[1] || (_cache[1] = ($event) => vue.unref(copy)(TypeResponse.value))
              }, "copy")) : vue.createCommentVNode("", true)
            ]),
            vue.createElementVNode("pre", null, vue.toDisplayString(TypeRequest.value), 1)
          ]),
          vue.createElementVNode("details", null, [
            vue.createElementVNode("summary", null, [
              vue.createTextVNode("Response "),
              vue.unref(isSupported) ? (vue.openBlock(), vue.createElementBlock("a", {
                key: 0,
                class: "copy",
                onClick: _cache[2] || (_cache[2] = ($event) => vue.unref(copy)(TypeResponse.value))
              }, "copy")) : vue.createCommentVNode("", true)
            ]),
            vue.createElementVNode("pre", null, vue.toDisplayString(TypeResponse.value), 1)
          ])
        ], 4)) : vue.createCommentVNode("", true);
      };
    }
  });
  const App_vue_vue_type_style_index_0_scoped_5c90b940_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5c90b940"]]);
  vue.createApp(App).mount(
    (() => {
      const app = document.createElement("div");
      document.body.append(app);
      return app;
    })()
  );
})(Vue);
