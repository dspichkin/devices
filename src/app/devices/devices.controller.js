(function() {
  'use strict';

  angular
    .module('devices')
    .controller('DevicesController', DevicesController);

  function DevicesController(devices) {
    var vm = this;

    vm.devices = devices.devices;
  }
})();
