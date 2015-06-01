define(['exports', 'module', 'dojo/_base/declare', 'dijit/_WidgetBase', 'dijit/_TemplatedMixin', 'dbind/bind', 'stores/LocatorStore', 'helpers/NumFormatter', 'dojo/text!./templates/LocatorView.html'], function (exports, module, _dojo_baseDeclare, _dijit_WidgetBase, _dijit_TemplatedMixin, _dbindBind, _storesLocatorStore, _helpersNumFormatter, _dojoTextTemplatesLocatorViewHtml) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _declare = _interopRequireDefault(_dojo_baseDeclare);

  var _WidgetBase2 = _interopRequireDefault(_dijit_WidgetBase);

  var _TemplatedMixin2 = _interopRequireDefault(_dijit_TemplatedMixin);

  var _bind = _interopRequireDefault(_dbindBind);

  var _store = _interopRequireDefault(_storesLocatorStore);

  var _format = _interopRequireDefault(_helpersNumFormatter);

  var _template = _interopRequireDefault(_dojoTextTemplatesLocatorViewHtml);

  var fixed = (0, _format['default'])(3);

  module.exports = (0, _declare['default'])([_WidgetBase2['default'], _TemplatedMixin2['default']], {
    templateString: _template['default'],
    postCreate: function postCreate() {
      var xStore = (0, _bind['default'])(fixed).to(_store['default'], 'x');
      var yStore = (0, _bind['default'])(fixed).to(_store['default'], 'y');

      (0, _bind['default'])(this.yNode).to(yStore);
      (0, _bind['default'])(this.xNode).to(xStore);
    }
  });
});