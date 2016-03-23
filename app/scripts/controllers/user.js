'use strict';

/**
 * @ngdoc function
 * @name okfounderApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the okfounderApp
 */
angular.module('okfounderApp')
  .controller('UsersCtrl', ['UsersFactory', '$scope', function (User, $scope) {

    User.getUsers().then(function(res){
      $scope.users = res.data.users;
    });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
