/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('devices')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('config', {
        URL_USERS: '/assets/users.json'
    });

})();
