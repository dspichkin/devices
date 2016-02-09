(function() {
  'use strict';

  angular
    .module('app')
    .controller('DevicesController', DevicesController);

  function DevicesController(devices) {
    var vm = this;

    vm.devices = devices.devices;
  }
})();
