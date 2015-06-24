'use strict';

describe('Service: manufacturers', function () {

  // load the service's module
  beforeEach(module('aamiApp'));

  // instantiate service
  var manufacturersService;
  beforeEach(inject(function (_manufacturersService_) {
    manufacturersService = _manufacturersService_;
  }));

  it('should do something', function () {
    expect(!!manufacturersService).toBe(true);
  });

});
