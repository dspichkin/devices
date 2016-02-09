(function() {
  'use strict';

  angular
    .module('devices')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('users', {
        url: '/users/',
        templateUrl: 'app/users/users.html',
        controller: 'UsersController',
        controllerAs: 'vm',
        resolve: {
          users:  function($http, config, $userdeviceservice){
            //console.log("33 ", $userdeviceservice.get())
            return {
              users: $userdeviceservice.get()
            };
            // $http returns a promise for the url data
            // return $http({method: 'GET', url: config.URL_USERS});
         }
        }
      })
      .state('devices', {
        url: '/devices/',
        templateUrl: 'app/devices/devices.html',
        controller: 'DevicesController',
        controllerAs: 'vm',
        resolve: {
          devices:  function($http, config, $deviceservice){
            return {
              devices: $deviceservice.get()
            };
          }
        }
      });
      

    $urlRouterProvider.otherwise('/');
  }

})();
