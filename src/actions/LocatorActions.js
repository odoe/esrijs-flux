define([
  'dojo/topic'
], function(topic) {

  return {
    updateXY: function updateXY(data) {
      topic.publish('UPDATE-XY', data);
    }
  };

});
