import { getHooks } from '../../compatible/vue/hookKey'
import { permission } from './src/v-permission'
import { App } from 'vue'
import { DEFAULT_PLUGIN_OPTIONS } from './src/options'
const VPermissionDirective = (app: any) => {
    const hooks = getHooks(app)
    const globalOptions = { ...DEFAULT_PLUGIN_OPTIONS }
    app.directive(globalOptions.directive, {
      [hooks.mounted](el: HTMLElement, { value }: any) {
        permission(
          el,
          value.permission,
          value.systemPermission
        )
      },
      [hooks.updated](el: HTMLElement, { value }: any) {
        permission(
          el,
          value.permission,
          value.systemPermission
        )
      }
    })
}

export default VPermissionDirective
