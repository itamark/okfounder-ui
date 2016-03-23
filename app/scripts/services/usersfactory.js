'use strict';

/**
 * @ngdoc service
 * @name okfounderApp.UsersFactory
 * @description
 * # UsersFactory
 * Service in the okfounderApp.
 */
angular.module('okfounderApp')
  .service('UsersFactory', ['$http', '$q', '$httpParamSerializer', function ($http, $q, Serialize) {
    console.log('hi');
    // AngularJS will instantiate a singleton by calling "new" on this function
    var UsersFactory = {};

    UsersFactory.getUsers = function(){
      var deferred = $q.defer();
      $http.get('https://okfounder.herokuapp.com/users').then(function(res){
        deferred.resolve(res);
      });
      return deferred.promise;
    };

    UsersFactory.findUsers = function(term){
      var query = {'query': term};
      var queryString = Serialize(query);
      var deferred = $q.defer();
      $http.get('https://okfounder.herokuapp.com/users/search?'+queryString).then(function(res){
        deferred.resolve(res);
      });
      return deferred.promise;
    };



    return UsersFactory;
  }]);
