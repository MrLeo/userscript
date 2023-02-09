/* eslint-disable no-console */
import packageInfo from '../package.json'

export { addConsole } from './log'
export { checkVersion } from './version'

console.info('core version', packageInfo.version)

export default {
  version: packageInfo.version,
}
