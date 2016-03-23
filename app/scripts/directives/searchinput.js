'use strict';

/**
 * @ngdoc directive
 * @name okfounderApp.directive:searchInput
 * @description
 * # searchInput
 */
angular.module('okfounderApp')
  .directive('searchInput',['$state', function ($state) {
    return {
      templateUrl: 'views/search-input.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.searchTerm = "";
        scope.search = function(){
          $state.go("search", { term: scope.searchTerm });
        }
      }
    };
  }]);
