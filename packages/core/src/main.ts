/* eslint-disable no-console */
import packageInfo from '../package.json'

try {
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  document.body.appendChild(iframe)
  // @ts-ignore
  console = iframe?.contentWindow?.console
  window.console = console

  const oldTrace = console.trace
  console.trace = (...args) => {
    console.groupCollapsed.apply(console, args) // eslint-disable-line prefer-spread
    oldTrace('')
    console.groupEnd()
  }
} catch (error) {}

export default {
  version: packageInfo.version,
}
