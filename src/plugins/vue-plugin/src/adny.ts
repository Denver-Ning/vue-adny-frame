import { isVue3 } from './utils/isVue3'
import { log, debugLog, featLog } from './utils/log'
import { App, Plugin } from 'vue'

interface Vue2 {
  default: {
    version: string
  }
}
const logKeys: any = {
  log, debugLog, featLog
}

const Adny = {
  install: function (app: App | Vue2, options: any) {
    if (isVue3(app)) {
      Object.keys(logKeys).forEach(item => {
        app.config.globalProperties[item] = logKeys[item]
      })
    }
  }
} as Plugin & { installed: boolean }

export default Adny
