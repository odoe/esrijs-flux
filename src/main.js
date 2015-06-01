import MapView from 'views/MapView';
import LocatorView from 'views/LocatorView';

var node = document.getElementById('map-area');
var node2 = document.getElementById('locator-area');
var mapView = new MapView(null, node);
var locatorView = new LocatorView(null, node2);
