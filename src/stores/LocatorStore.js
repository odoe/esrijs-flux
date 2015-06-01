import Stateful from 'dojo/Stateful';
import topic from 'dojo/topic';

class Store extends Stateful {
  constructor() {
    super();
    this.set('x', 0);
    this.set('y', 0);
  }
};

// http://www.anujgakhar.com/2013/08/29/singletons-in-dojo/
if (!_instance) {
  var _instance = new Store();
  topic.subscribe('UPDATE-XY', (data) => {
    _instance.set('x', data.x);
    _instance.set('y', data.y);
  });
}

export default _instance;
