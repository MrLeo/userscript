#!/usr/bin/env zx
/**
 * https://gist.github.com/MrLeo/b7a72502cc55fcd99d25226be162235f
 *
 * 如何使用:
 * pnpm add zx -D #-w
 * zx ./web-config.mjs
 */
import 'zx/globals'

console.log(`[LOG] -> path.dirname(import.meta.url)`, path.dirname(import.meta.url))
console.log(`[LOG] -> __dirname`, __dirname)

let packageInfo = await fs.readJson(path.join(__dirname || path.dirname(import.meta.url), '../package.json'))
console.log(`[LOG] -> package`, packageInfo)
