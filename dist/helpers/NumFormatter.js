define(['exports', 'module', 'dojox/lang/functional/curry'], function (exports, module, _dojoxLangFunctionalCurry) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _curry = _interopRequireDefault(_dojoxLangFunctionalCurry);

  module.exports = (0, _curry['default'])(function (i, n) {
    if (n === undefined) {
      return 0;
    }
    return n.toFixed(i);
  });
});