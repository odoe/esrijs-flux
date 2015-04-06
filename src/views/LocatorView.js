define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dbind/bind',
  'stores/LocatorStore',
  'helpers/NumFormatter',
  'dojo/text!./templates/LocatorView.html'
], function(
  declare,
  _WidgetBase, _TemplatedMixin,
  bind, store, format,
  template
) {

  var fixed = format(3);

  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    postCreate: function() {
      var xStore = bind(fixed).to(store, 'x');
      var yStore = bind(fixed).to(store, 'y');

      bind(this.yNode).to(yStore);
      bind(this.xNode).to(xStore);
    }
  });

});
