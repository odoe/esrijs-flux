define(['exports', 'module', 'dojo/_base/declare', 'dojo/on', 'dijit/_WidgetBase', 'dijit/_TemplatedMixin', 'esri/map', 'actions/LocatorActions'], function (exports, module, _dojo_baseDeclare, _dojoOn, _dijit_WidgetBase, _dijit_TemplatedMixin, _esriMap, _actionsLocatorActions) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _declare = _interopRequireDefault(_dojo_baseDeclare);

  var _on = _interopRequireDefault(_dojoOn);

  var _WidgetBase2 = _interopRequireDefault(_dijit_WidgetBase);

  var _TemplatedMixin2 = _interopRequireDefault(_dijit_TemplatedMixin);

  var _Map = _interopRequireDefault(_esriMap);

  var _LocatorAction = _interopRequireDefault(_actionsLocatorActions);

  module.exports = (0, _declare['default'])([_WidgetBase2['default'], _TemplatedMixin2['default']], {
    templateString: '<div class="map-container"></div>',
    postCreate: function postCreate() {
      var map = new _Map['default'](this.domNode, {
        center: [-118, 34.5],
        zoom: 8,
        basemap: 'topo'
      });
      this.set('map', map);
      var handle = (0, _on['default'])(map, 'mouse-move', function (e) {
        _LocatorAction['default'].updateXY(e.mapPoint);
      });
      this.own(handle);
    }
  });
});