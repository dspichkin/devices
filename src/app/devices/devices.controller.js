(function() {
  'use strict';

  angular
    .module('devices')
    .controller('DevicesController', DevicesController);

  function DevicesController($userdeviceservice, $deviceservice) {
    var vm = this;

    var users = $userdeviceservice.get();
    var selected_devices = {};
    var devices = [];
    for (var i = 0, len = users.length; i < len; i++) {
    	if (users[i].hasOwnProperty('selected') && users[i].selected === true) {
    		for (var j = 0, lenj = users[i].devices.length; j < lenj; j++) {
    			selected_devices[users[i].devices[j]] = true;
    		}
    	}
    }

    for (var x in selected_devices) {
    	devices.push($deviceservice.get_device_by_id(x));
    }
    vm.devices = devices;
  }
})();
