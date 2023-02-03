/* eslint-disable no-console */
import packageInfo from '../package.json'

// @ts-ignore isolatedModules
console.log('hello world')

const oldTrace = console.trace
console.trace = (...args) => {
  console.groupCollapsed.apply(console, args) // eslint-disable-line prefer-spread
  oldTrace('')
  console.groupEnd()
}

export default {
  version: packageInfo.version,
}
