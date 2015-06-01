define(['exports', 'module', 'dojo/topic'], function (exports, module, _dojoTopic) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _topic = _interopRequireDefault(_dojoTopic);

  var updates = {
    updateXY: function updateXY(data) {
      _topic['default'].publish('UPDATE-XY', data);
    }
  };

  module.exports = updates;
});