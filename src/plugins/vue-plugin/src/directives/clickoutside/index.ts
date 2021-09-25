import { getHooks } from '../../compatible/vue/hookKey'
import { clickoutside, deleteClickOutside } from './src/v-clickoutside'
import { App } from 'vue'
import { DEFAULT_PLUGIN_OPTIONS } from './src/options'
const VClickOutSideDirective = (app: any) => {
    const hooks = getHooks(app)
    const globalOptions = { ...DEFAULT_PLUGIN_OPTIONS }
    app.directive(globalOptions.directive, {
      [hooks.mounted](el: HTMLElement, { value }: any) {
        clickoutside(
          el,
          value
        )
      },
      [hooks.updated](el: HTMLElement, { value }: any) {
        clickoutside(
          el,
          value
        )
      }
    })
}

export default VClickOutSideDirective
