import declare from 'dojo/_base/declare';
import _WidgetBase from 'dijit/_WidgetBase';
import _TemplatedMixin from 'dijit/_TemplatedMixin';
import bind from 'dbind/bind';
import store from 'stores/LocatorStore';
import format from 'helpers/NumFormatter';
import template from 'dojo/text!./templates/LocatorView.html';

var fixed = format(3);

export default declare([_WidgetBase, _TemplatedMixin], {
  templateString: template,
  postCreate() {
    var xStore = bind(fixed).to(store, 'x');
    var yStore = bind(fixed).to(store, 'y');

    bind(this.yNode).to(yStore);
    bind(this.xNode).to(xStore);
  }
});
