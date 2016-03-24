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
      $http.get('https://okfounder.herokuapp.com/users/all').then(function(res){
        deferred.resolve(res);
      });
      return deferred.promise;
    };

    UsersFactory.getUserById = function(id){
      var deferred = $q.defer();
      $http.get('https://okfounder.herokuapp.com/users/'+id).then(function(res){
        deferred.resolve(res);
      });
      return deferred.promise;
    };

    UsersFactory.create = function(user){
      var deferred = $q.defer();
      $http.post('http://okfounder.herokuapp.com/users/create', user).then(function(res){
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

    UsersFactory.findUsersByFacets = function(params){
      // build queryString
      var queryString = '';
      for(var i=0; i<params.length; i++){
        if(i>0){
          queryString+='&';
        }
        queryString+=params[i].facet+'='+params[i].value;
      }
      $http.get('https://okfounder.herokuapp.com/users/by_facets?'+queryString).then(function(res){
        deferred.resolve(res);
      });
    };



    return UsersFactory;
  }]);
