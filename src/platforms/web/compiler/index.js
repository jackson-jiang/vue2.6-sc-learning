/* @flow */

import {
  baseOptions
} from './options'
import {
  createCompiler
} from 'compiler/index'

// * @JK[编译流程]: 00 createCompiler
// * 传入处理模块，创建compiler
// * AST属性转换：class, style, model(对动态绑定type的情况的v-model做预处理(if-else化)，因为不同type的v-model的转换是不同的)
// * AST指令转换：v-html, v-model, v-text
const {
  compile,
  compileToFunctions
} = createCompiler(baseOptions)


// * @JK: 导出编译方法
export {
  compile,
  compileToFunctions
}
