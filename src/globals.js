import WildEmitter from 'wildemitter'

function _CC() {}

WildEmitter.mixin(_CC)

class Globals {
  constructor() {
    this.emitter = new _CC()
    this.userId = null
  }
}

export default new Globals()
