(function() {
  'use strict';
  angular
    .module('app')
    .controller('UsersController', UsersController);

  function UsersController($http, users, $deviceservice, $userdeviceservice) {
    var vm = this;
    
    vm.users = users.users;
    
    vm.devices = [];
    vm.selectedDevice = null;
    vm.selected_users = [];

    vm.refreshDevices = function(name, user) {

      return $deviceservice.get_by_name_and_user(name, user.id).then(function(response) {
        var available_devices = [];
        for (var i = 0, len = response.length; i < len; i++) {
          var has_device = false;
          for (var j = 0, lenj = user.devices.length; j < lenj; j++) {
            if (response[i].id == user.devices[j]) {
              has_device = true;
              break;
            }
          }
          if (has_device === false) {
            available_devices.push(response[i]);
          }
        }
        vm.devices = available_devices;
      });
      //var params = {address: address, sensor: false};
      //return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
      //  .then(function(response) {
      //    vm.devices = response.data.results
      //  });
    };

    vm.deleteDevice = function(user_id, device_id) {
      vm.users = $userdeviceservice.delete_device(user_id, device_id);
    };

    vm.addDevice = function($item, user_id) {
      vm.users = $userdeviceservice.add_device(user_id, $item.id);
      vm.devices = [];
    };

    vm.toggleSelection = function(user_id) {
      $userdeviceservice.selected(user_id);
    };
    
  }
})();
