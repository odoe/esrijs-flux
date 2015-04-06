define([
  'dojo/_base/declare',
  'dojo/topic',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dbind/bind',
  'stores/LocatorStore',
  'helpers/NumFormatter',
  'dojo/text!./templates/LocatorView.html'
], function(
  declare, topic,
  _WidgetBase, _TemplatedMixin,
  bind, store, format,
  template
) {

  var fixed = format(3);

  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    constructor: function() {
      this.set('x', 0);
      this.set('y', 0);
      store.watch('x', function(_, __, val) {
        this.set('x', fixed(val));
      }.bind(this));
      store.watch('y', function(_, __, val) {
        this.set('y', fixed(val));
      }.bind(this))
    },
    postCreate: function() {
      bind(this.yNode).to(this, 'y');
      bind(this.xNode).to(this, 'x');
    }
  });

});
