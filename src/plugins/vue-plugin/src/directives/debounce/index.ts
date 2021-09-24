import { getHooks } from '../../compatible/vue/hookKey'
import { debounce } from './v-debounce'
import { App } from 'vue'
import { DEFAULT_PLUGIN_OPTIONS, IVDrbouncePluginOption } from './options'
const VDebounceDirective = (app) => {
    const hooks = getHooks(app)
    const globalOptions = { ...DEFAULT_PLUGIN_OPTIONS }
    app.directive(globalOptions.directive, {
      [hooks.mounted](el: HTMLElement, { value }: any) {
        debounce(
          value.event,
          el,
          value.delay,
          value.callback,
          value.headExecution
        )
      }
    })
}

export default VDebounceDirective
