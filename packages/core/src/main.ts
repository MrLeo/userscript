/* eslint-disable no-console */
import packageInfo from '../package.json'
import { addConsole } from './log'

console.info('core version', packageInfo.version)

export default {
  version: packageInfo.version,
  addConsole,
}
