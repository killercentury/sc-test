'use strict';

describe('Service: manufactureYearsService', function () {

  // load the service's module
  beforeEach(module('aamiApp'));

  // instantiate service
  var manufactureYearsService;
  beforeEach(inject(function (_manufactureYearsService_) {
    manufactureYearsService = _manufactureYearsService_;
  }));

  it('should do something', function () {
    expect(!!manufactureYearsService).toBe(true);
  });

});
