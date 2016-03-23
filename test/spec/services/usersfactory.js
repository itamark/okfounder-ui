'use strict';

describe('Service: UsersFactory', function () {

  // load the service's module
  beforeEach(module('okfounderApp'));

  // instantiate service
  var UsersFactory;
  beforeEach(inject(function (_UsersFactory_) {
    UsersFactory = _UsersFactory_;
  }));

  it('should do something', function () {
    expect(!!UsersFactory).toBe(true);
  });

});
