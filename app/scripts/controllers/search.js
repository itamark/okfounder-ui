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

    $scope.searchParams = {
      looking_for:[
        "",
        "CEO",
        "CTO / VP R&D",
        "CMO / VP Marketing",
        "CFO / VP Finance",
        "VP Sales",
        "VP Product",
        "VP Bizdev",
        "Other"
      ],
      stage:[
        "",
        "Idea",
        "Prototype",
        "Beta",
        "Production (Live)"
      ],
      funding_stage:[
        "",
        "None",
        "Less than 100,000$",
        "100K-500,000$",
        "500K-1M$",
        "Over 1M$+",
        "Other/Would rather not say"
      ],
      num_people_in_venture:[
        "",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "10+"
      ],
      salary_or_equity:[
        "",
        "Mostly Salary",
        "Some salary, some equity",
        "Mostly equity"
      ]
    };

    $scope.updateUrl = function(){
      console.log($scope.search);
      $state.transitionTo('main', $scope.search, { notify: false });
    };

    $scope.search = {
      looking_for: $scope.searchParams.looking_for[0],
      stage: $scope.searchParams.stage[0],
      funding_stage: $scope.searchParams.funding_stage[0],
      num_people_in_venture: $scope.searchParams.num_people_in_venture[0],
      salary_or_equity: $scope.searchParams.salary_or_equity[0]
    };

    User.getUsers().then(function(res){
      $scope.users = res.data.users;
    });

    User.findUsers($state.params.term).then(function(res){
      $scope.users = res.data.users;
    });

    //User.findUsersByFacets(params).then(function(res){
    //  $scope.users = res.data.users;
    //});
  }]);
