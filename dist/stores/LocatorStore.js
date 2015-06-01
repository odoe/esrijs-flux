define(['exports', 'module', 'dojo/Stateful', 'dojo/topic'], function (exports, module, _dojoStateful, _dojoTopic) {
  'use strict';

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var _Stateful2 = _interopRequireDefault(_dojoStateful);

  var _topic = _interopRequireDefault(_dojoTopic);

  var Store = (function (_Stateful) {
    function Store() {
      _classCallCheck(this, Store);

      _get(Object.getPrototypeOf(Store.prototype), 'constructor', this).call(this);
      this.set('x', 0);
      this.set('y', 0);
    }

    _inherits(Store, _Stateful);

    return Store;
  })(_Stateful2['default']);

  ;

  // http://www.anujgakhar.com/2013/08/29/singletons-in-dojo/
  if (!_instance) {
    var _instance = new Store();
    _topic['default'].subscribe('UPDATE-XY', function (data) {
      _instance.set('x', data.x);
      _instance.set('y', data.y);
    });
  }

  module.exports = _instance;
});