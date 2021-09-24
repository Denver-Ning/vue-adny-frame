import { App, Plugin } from 'vue'
import logUtil from './utils/consoleLog/index'
import formatUtil from './utils/format/index'
import VDebounceDirective from './directives/debounce'
interface Vue2 {
  default: {
    version: string
  }
}

const Adny = {
  install: function (app: App | Vue2, options: any) {
    logUtil(app)
    formatUtil(app)
    VDebounceDirective(app)
  }
} as Plugin & { installed: boolean }

export default Adny
