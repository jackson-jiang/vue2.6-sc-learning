import Vue from './instance/index'
import {
  initGlobalAPI
} from './global-api/index'
import {
  isServerRendering
} from 'core/util/env'
import {
  FunctionalRenderContext
} from 'core/vdom/create-functional-component'
// * @JK[初始化流程]: 00 Vue定义，global
// * 定义global api: Vue.xx, Vue.extend， Vue.mixin...
initGlobalAPI(Vue)

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue
