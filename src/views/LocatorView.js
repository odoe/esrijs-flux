define([
  'dojo/_base/declare',
  'dojo/topic',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dbind/bind',
  'stores/LocatorStore',
  'dojo/text!./templates/LocatorView.html'
], function(
  declare, topic,
  _WidgetBase, _TemplatedMixin,
  bind, store,
  template
) {

  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    postCreate: function() {
      bind(this.yNode).to(store, 'y');
      bind(this.xNode).to(store, 'x');
    }
  });

});
