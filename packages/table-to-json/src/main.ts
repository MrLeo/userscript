/* eslint-disable no-console */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { checkVersion } from '@leo/core'

checkVersion()

createApp(App).mount(
  (() => {
    const app = document.createElement('div')
    document.body.append(app)
    return app
  })(),
)
