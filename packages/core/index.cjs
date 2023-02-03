/* eslint-disable no-console */
;(function () {
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  const oldTrace = console.trace
  console.trace = (...args) => {
    console.groupCollapsed.apply(console, args) // eslint-disable-line prefer-spread
    oldTrace('')
    console.groupEnd()
  }
})()
