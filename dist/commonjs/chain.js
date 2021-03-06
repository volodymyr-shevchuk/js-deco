'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports._chain = _chain;

var _decorators = require('./decorators');

function _chain(fn) {
  return function () {
    fn.apply(this, arguments);
    return this;
  };
}

var chain = _decorators.Decorators.mutator(_chain);
exports.chain = chain;
//# sourceMappingURL=chain.js.map