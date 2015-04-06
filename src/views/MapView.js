define([
  'dojo/_base/declare',
  'dojo/on',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'esri/map',
  'actions/LocatorActions'
], function(
  declare, on,
  _WidgetBase, _TemplatedMixin,
  Map, LocatorAction
) {

  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: '<div class="map-container"></div>',
    postCreate: function() {
      var map = new Map(this.domNode, {
        center: [-118, 34.5],
        zoom: 8,
        basemap: 'topo'
      });
      this.set('map', map);
      var handle = on(map, 'mouse-move', function(e) {
        LocatorAction.updateXY(e.mapPoint);
      });
      this.own(handle);
    }
  });

});
