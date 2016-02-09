(function() {
  'use strict';

  angular
    .module('devices')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
