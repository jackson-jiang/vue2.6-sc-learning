/* @flow */

import {
  parse
} from './parser/index'
import {
  optimize
} from './optimizer'
import {
  generate
} from './codegen/index'
import {
  createCompilerCreator
} from './create-compiler'

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
// * @JK[编译流程]: 00 编译器工厂
// * 创建基本的编译器工厂
// * 编译方法：parse -> optimize -> generate
export const createCompiler = createCompilerCreator(function baseCompile(
  template: string,
  options: CompilerOptions
): CompiledResult {
  // * @JK[编译流程]: 03 解析模板 --> AST
  const ast = parse(template.trim(), options)
  // * @JK[编译流程]: 04 优化 --> 静态标记: static, staticRoot, staticInFor
  if (options.optimize !== false) {
    optimize(ast, options)
  }
  // * @JK[编译流程]: 05 生成 --> code: string
  const code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})
