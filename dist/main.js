define(['exports', 'views/MapView', 'views/LocatorView'], function (exports, _viewsMapView, _viewsLocatorView) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _MapView = _interopRequireDefault(_viewsMapView);

  var _LocatorView = _interopRequireDefault(_viewsLocatorView);

  var node = document.getElementById('map-area');
  var node2 = document.getElementById('locator-area');
  var mapView = new _MapView['default'](null, node);
  var locatorView = new _LocatorView['default'](null, node2);
});