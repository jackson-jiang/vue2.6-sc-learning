/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import {
  createPatchFunction
} from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

// * @JK[渲染流程]: 00 __patch__扩展：nodeOps：各种原⽣dom基础操作⽅法，modules：定义了属性更新实现
export const patch: Function = createPatchFunction({
  nodeOps,
  modules
})
