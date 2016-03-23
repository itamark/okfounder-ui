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
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "views/main.html",
        controller: "MainCtrl"
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
      .state('search', {
        url: "/search/:term",
        templateUrl: "views/search.html",
        controller: 'SearchCtrl'
      });
  });
