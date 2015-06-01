(function() {
  'use strict';

  var pathRX = new RegExp(/\/[^\/]+$/)
    , locationPath = location.pathname.replace(pathRX, '');

  require({
    async: true,
    parseOnLoad: true,
    packages: [{
      name: 'dbind',
      location: 'https://rawgit.com/kriszyp/dbind/master'
    }, {
      name: 'views',
      location: locationPath + 'src/views'
    }, {
      name: 'helpers',
      location: locationPath + 'src/helpers'
    }, {
      name: 'actions',
      location: locationPath + 'src/actions'
    }, {
      name: 'stores',
      location: locationPath + 'src/stores'
    }, {
      name: 'app',
      location: locationPath + 'src'
    }]
  }, ['app']);

})();
