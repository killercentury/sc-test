'use strict';

describe('Service: manufactureYearOptionsService', function () {

  // load the service's module
  beforeEach(module('aamiApp'));

  // instantiate service
  var manufactureYearOptionsService;
  beforeEach(inject(function (_manufactureYearOptionsService_) {
    manufactureYearOptionsService = _manufactureYearOptionsService_;
  }));

  it('should do something', function () {
    expect(!!manufactureYearOptionsService).toBe(true);
  });

});
