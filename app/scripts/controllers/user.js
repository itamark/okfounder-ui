'use strict';

/**
 * @ngdoc function
 * @name okfounderApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the okfounderApp
 */
angular.module('okfounderApp')
  .controller('UsersCtrl', ['UsersFactory', '$scope', '$state', function (User, $scope, $state) {
    $scope.user = {
      name: '',
      desc: ''
    };
    // if it's not a single user
    if(!$state.params.id){
      User.getUsers().then(function(res){
        $scope.users = res.data.users;
      });
    } else {
      // if it is a single user
      User.getUserById($state.params.id).then(function(res){
        $scope.user = res.data.users[0];
        console.log($scope.user);
      });
    }

    $scope.createUser = function(){
      User.create($scope.user).then(function(res){
        console.log(res);
        //$scope.user = res.data.users[0];
      });
    };

    $scope.findUsersByFacets = function(){
      User.findUsersByFacets
    }


    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
