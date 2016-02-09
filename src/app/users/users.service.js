(function() {
  'use strict';
  /*
globals
*/
  angular
    .module('app')
    .factory('$userservice', userservice);
    

    function userservice() {
        var users = [
            {   "id": 1,
                "first_name": "Имя",
                "last_name": "Фамилия",
                "description": "Описание",
                "devices": [1, 2, 3]
            },
            {
                "id": 2,
                "first_name": "Имя1",
                "last_name": "Фамилия1",
                "description": "Описание1",
                "devices": [1, 2, 3, 4]
            },
            {
                "id": 3,
                "first_name": "Имя2",
                "last_name": "Фамилия2",
                "description": "Описание2",
                "devices": [1, 2]
            },
            {
                "id": 4,
                "first_name": "Имя3",
                "last_name": "Фамилия3",
                "description": "Описание3",
                "devices": [4]
            },
            {
                "id": 5,
                "first_name": "Имя4",
                "last_name": "Фамилия4",
                "description": "Описание4",
                "devices": []
            }
        ];
        

        function _get_users() {
            return users;
        }

        
        

        return {
            get: function() {
                return _get_users();
            }
        };
    }
})();