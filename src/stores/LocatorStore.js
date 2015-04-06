define([
  'dojo/_base/declare',
  'dojo/Stateful',
  'dojo/topic'
], function(
  declare, Stateful, topic
) {

  var Store = declare([Stateful], {
    x: 0,
    y: 0
  });

  // http://www.anujgakhar.com/2013/08/29/singletons-in-dojo/
  if (!_instance) {
    var _instance = new Store();
    topic.subscribe('UPDATE-XY', function(data) {
      _instance.set('x', data.x);
      _instance.set('y', data.y);
    });
  }
  return _instance;
});
