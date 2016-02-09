/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('app')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('config', {
        URL_USERS: '/assets/users.json'
    });

})();
