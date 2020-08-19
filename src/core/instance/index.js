import {
  initMixin
} from './init'
import {
  stateMixin
} from './state'
import {
  renderMixin
} from './render'
import {
  eventsMixin
} from './events'
import {
  lifecycleMixin
} from './lifecycle'
import {
  warn
} from '../util/index'
// * @JK[初始化流程]: 00 Vue定义，core
function Vue(options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // * @JK[初始化流程]: 01 入口
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
