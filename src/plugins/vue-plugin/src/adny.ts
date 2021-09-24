import { isVue3 } from './compatible/vue/isVue3'
import { App, Plugin } from 'vue'
import logUtil from './utils/consoleLog/index'
import formatUtil from './utils/format/index'
interface Vue2 {
  default: {
    version: string
  }
}

const Adny = {
  install: function (app: App | Vue2, options: any) {
    logUtil(app)
    formatUtil(app)
  }
} as Plugin & { installed: boolean }

export default Adny
