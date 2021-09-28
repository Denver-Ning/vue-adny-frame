import { App, Plugin } from 'vue'
import logUtil from './utils/consoleLog/index'
import formatUtil from './utils/format/index'
import VDebounceDirective from './directives/debounce'
import VPermissionDirective from './directives/permission'
import VClickOutSideDirective from './directives/clickoutside'
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
    VPermissionDirective(app) // 权限工具函数
    VClickOutSideDirective(app) // 点击outside
  }
} as Plugin & { installed: boolean }

export default Adny
