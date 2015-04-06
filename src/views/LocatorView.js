define([
  'dojo/_base/declare',
  'dojo/topic',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dbind/bind',
  'dojo/text!./templates/LocatorView.html'
], function(
  declare, topic,
  _WidgetBase, _TemplatedMixin,
  bind,
  template
) {

  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    postCreate: function() {
      bind(this.yNode).to(this.store, 'y');
      bind(this.xNode).to(this.store, 'x');
    }
  });

});
