import { App, Plugin } from 'vue'
import logUtil from './utils/consoleLog/index'
import formatUtil from './utils/format/index'
import VDebounceDirective from './directives/debounce'
import VPermissionDirective from './directives/permission'
interface Vue2 {
  default: {
    version: string
  }
}

const Adny = {
  install: function (app: App | Vue2, options: any) {
    logUtil(app) // log工具函数
    formatUtil(app) // 时间格式化工具函数
    VDebounceDirective(app) // 防抖工具函数
    VPermissionDirective(app)
  }
} as Plugin & { installed: boolean }

export default Adny
