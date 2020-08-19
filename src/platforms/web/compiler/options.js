/* @flow */

import {
  isPreTag,
  mustUseProp,
  isReservedTag,
  getTagNamespace
} from '../util/index'

import modules from './modules/index'
import directives from './directives/index'
import {
  genStaticKeys
} from 'shared/util'
import {
  isUnaryTag,
  canBeLeftOpenTag
} from './util'

export const baseOptions: CompilerOptions = {
  expectHTML: true,
  // * @JK: 属性转换：class，style和v-model的预处理, 存在:type的情况需要转换为if-else形式，因为不同的type v-model的处理是不同的
  modules,
  // * @JK: 指令转换：v-html, v-model, v-text
  directives,
  isPreTag,
  isUnaryTag,
  mustUseProp,
  canBeLeftOpenTag,
  isReservedTag,
  getTagNamespace,
  staticKeys: genStaticKeys(modules)
}
