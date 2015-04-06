define([
  'dojo/_base/declare',
  'dojo/Stateful',
  'dojo/topic',
  'helpers/NumFormatter'
], function(
  declare, Stateful, topic, format
) {

  var fixed = format(3);

  var Store = declare([Stateful], {
    x: 0,
    y: 0,
    getXY: function() {
      return {
        x: this.get('x'),
        y: this.get('y')
      };
    }
  });

  // http://www.anujgakhar.com/2013/08/29/singletons-in-dojo/
  if (!_instance) {
    var _instance = new Store();
    topic.subscribe('UPDATE-XY', function(data) {
      _instance.set('x', fixed(data.x));
      _instance.set('y', fixed(data.y));
    });
  }
  return _instance;
});
