/* @flow */

import type Watcher from './watcher'
import {
  remove
} from '../util/index'
import config from '../config'

let uid = 0

// * @JK[响应式]: 02 依赖管理
// * 添加依赖 depend(), Dep.target, Dep.target.addDep()
// * 通知更新 notify()
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
export default class Dep {
  static target: ? Watcher;
  id: number;
  subs: Array < Watcher > ;

  constructor() {
    this.id = uid++
    this.subs = []
  }

  addSub(sub: Watcher) {
    this.subs.push(sub)
  }

  removeSub(sub: Watcher) {
    remove(this.subs, sub)
  }

  depend() {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  // * @JK[更新流程]: 02 通知相关watcher进行更新
  notify() {
    // stabilize the subscriber list first
    const subs = this.subs.slice()
    if (process.env.NODE_ENV !== 'production' && !config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort((a, b) => a.id - b.id)
    }
    for (let i = 0, l = subs.length; i < l; i++) {
      // * @JK: watcher更新
      subs[i].update()
    }
  }
}

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null
const targetStack = []

export function pushTarget(target: ? Watcher) {
  targetStack.push(target)
  Dep.target = target
}

export function popTarget() {
  targetStack.pop()
  Dep.target = targetStack[targetStack.length - 1]
}
