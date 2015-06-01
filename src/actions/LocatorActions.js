import topic from 'dojo/topic';

var updates = {
  updateXY: function updateXY(data) {
    topic.publish('UPDATE-XY', data);
  }
};

export default updates;
