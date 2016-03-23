'use strict';

describe('Directive: searchInput', function () {

  // load the directive's module
  beforeEach(module('okfounderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<search-input></search-input>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the searchInput directive');
  }));
});
