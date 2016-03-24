'use strict';

/**
 * @ngdoc overview
 * @name okfounderApp
 * @description
 * # okfounderApp
 *
 * Main module of the application.
 */
angular
  .module('okfounderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/search/");
    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "views/search.html",
        controller: "SearchCtrl"
      })
      .state('about', {
        url: "/about",
        templateUrl: "views/about.html",
        controller: 'AboutCtrl'
      })
      .state('users', {
        url: "/users",
        templateUrl: "views/users.html",
        controller: 'UsersCtrl'
      })
      .state('users-single', {
        url: "/users/:id",
        templateUrl: "views/users-single.html",
        controller: 'UsersCtrl'
      })
      .state('users-create', {
        url: "/users/create/new",
        templateUrl: "views/users-create.html",
        controller: 'UsersCtrl'
      })
      .state('search', {
        url: "/search/:term",
        templateUrl: "views/search.html",
        controller: 'SearchCtrl'
      });
  }]);
