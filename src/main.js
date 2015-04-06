require([
  'views/MapView',
  'views/LocatorView',
  'stores/LocatorStore',
  'dojo/domReady!'
], function(
  MapView, LocatorView, LocatorStore
) {
  var node = document.getElementById('map-area');
  var node2 = document.getElementById('locator-area');
  var mapView = new MapView(null, node);
  var locatorView = new LocatorView({
    store: LocatorStore
  }, node2);
});
