import declare from 'dojo/_base/declare';
import on from 'dojo/on';
import _WidgetBase from'dijit/_WidgetBase';
import _TemplatedMixin from 'dijit/_TemplatedMixin';
import Map from 'esri/map';
import LocatorAction from 'actions/LocatorActions';

export default declare([_WidgetBase, _TemplatedMixin], {
  templateString: '<div class="map-container"></div>',
  postCreate() {
    var map = new Map(this.domNode, {
      center: [-118, 34.5],
      zoom: 8,
      basemap: 'topo'
    });
    this.set('map', map);
    var handle = on(map, 'mouse-move', (e) => {
      LocatorAction.updateXY(e.mapPoint);
    });
    this.own(handle);
  }
});

