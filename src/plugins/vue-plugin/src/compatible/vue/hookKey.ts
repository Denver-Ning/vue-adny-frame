import { App } from 'vue'
import { isVue3 } from './isVue3'

const getHooks = (app: App) => {
  return isVue3(app)
    ? {
      mounted: 'mounted',
      updated: 'updated',
      unMounted: 'unmounted'
    }
    : {
      mounted: 'inserted',
      updated: 'updated',
      unMounted: 'unbind'
    }
}

export { getHooks }
