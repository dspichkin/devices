(function() {
  'use strict';
  /*
globals
*/
  angular
    .module('app')
    .factory('$deviceservice', devices);
    
    function devices($http, $q) {
        var devs = [
            {
                "id": 1,
                "name": "устройство 1"
            },
            {
                "id": 2,
                "name": "устройство 2"
            },
            {
                "id": 3,
                "name": "устройство 3"
            },
            {
                "id": 4,
                "name": "устройство 4"
            }
        ];
        

        function _get_devices() {
            return devs;
        }

        function _get_by_name_and_user(name) {
            var deferred = $q.defer();
            var has_name = [];
            if (name) {
                for (var i = 0, len = devs.length; i < len; i++ ) {
                    if (devs[i].name.indexOf(name) > -1 ) {
                        has_name.push(devs[i]); 
                    }
                }
                deferred.resolve(has_name);
            } else {
                deferred.resolve([]);
            }
            return deferred.promise; 
        }

        function _get_device_by_id(device_id) {
            for (var i = 0, len = devs.length; i < len; i++ ) {
                if (devs[i].id == device_id) {
                    return devs[i];
                } 
            }
        }

        return {
            get: function() {
                return _get_devices();
            },
            get_by_name_and_user: function(name) {
                return _get_by_name_and_user(name);
            },
            get_device_by_id: function(device_id) {
                return _get_device_by_id(device_id);
            }
        };
    }
})();