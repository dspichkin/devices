(function() {
  'use strict';
  /*
globals
*/
  angular
    .module('app')
    .factory('$userdeviceservice', userdeviceservice);
    
    //, $deviceservice, $userservice
    function userdeviceservice($http, config, $userservice, $deviceservice) {
        var users =  $userservice.get();

        function _get_users() {
            for (var i = 0, len = users.length; i < len; i++) {
                var devices = [];
                for (var j = 0, lenj = users[i].devices.length; j < lenj; j++) {
                    devices.push($deviceservice.get_device_by_id(users[i].devices[j]));
                }
                users[i].full_devices = devices;
            }  
            return users;
        }

        function _deleteDevice(user_id, device_id) {
            for (var i = 0, len = users.length; i < len; i++) {
                if (user_id == users[i].id) {
                    for (var j = 0, lenj = users[i].devices.length; j < lenj; j++) {
                        if (device_id == users[i].devices[j]) {
                            users[i].devices.splice(j, 1);
                            return _get_users();
                        }
                    }
                }
            }
            return users;
        }
        function _user_has_device(user_id, device_id) {
            for (var i = 0, len = users.length; i < len; i++) {
                if (user_id == users[i].id) {
                    for (var j = 0, lenj = users[i].devices.length; j < lenj; j++ ) {
                        if (users[i].devices[j].id == device_id) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }

        

        function _add_device(user_id, device_id) {
            for (var i = 0, len = users.length; i < len; i++) {
                if (user_id == users[i].id) {
                    var has_device = false;
                    for (var j = 0, lenj = users[i].devices.length; j < lenj; j++ ) {
                        if (device_id == users[i].devices[j]) {
                            has_device = true;
                        }
                    }
                    if (has_device === false) {
                        users[i].devices.push(device_id);
                        return _get_users();
                    }
                }
            }
            return _get_users();
        }

        function _selected(user) {
            for (var i = 0, len = users.length; i < len; i++) {
                if (user.id == users[i].id) {
                    if (users[i].hasOwnProperty('selected')) {
                        users[i].selected = !users[i].selected;
                    } else {
                        users[i].selected = true;
                    }
                    
                }
            }
        }

        return {
            get: function() {
                return _get_users();
            },
            user_has_device: function(user_id, device_id) {
                return _user_has_device(user_id, device_id);
            },
            delete_device: function(user_id, device_id) {
                return _deleteDevice(user_id, device_id);
            },
            add_device : function(user_id, device) {
                return _add_device(user_id, device);
            },
            selected: function(user) {
                return _selected(user);
            }
        };
    }
})();