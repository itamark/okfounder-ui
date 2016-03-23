'use strict';

/**
 * @ngdoc function
 * @name okfounderApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the okfounderApp
 */
angular.module('okfounderApp')
  .controller('SearchCtrl', ['$scope' ,'$state', 'UsersFactory', function ($scope, $state, User) {
    console.log($state.params);
    User.findUsers($state.params.term).then(function(res){
      $scope.users = res.data.users;
    });
  }]);
