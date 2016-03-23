'use strict';

/**
 * @ngdoc service
 * @name okfounderApp.UsersFactory
 * @description
 * # UsersFactory
 * Service in the okfounderApp.
 */
angular.module('okfounderApp')
  .service('UsersFactory', ['$http', '$q', function ($http, $q) {
    console.log('hi');
    // AngularJS will instantiate a singleton by calling "new" on this function
    var UsersFactory = {};
    UsersFactory.getUsers = function(){
      var deferred = $q.defer();
      $http.get('http://okfounder.herokuapp.com/users').then(function(res){
        console.log('hi');
        console.log(res);
        deferred.resolve(res);
      });
      return deferred.promise;
    };
    return UsersFactory;
  }]);
