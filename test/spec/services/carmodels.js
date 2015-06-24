'use strict';

describe('Service: carModelsService', function() {

  // load the service's module
  beforeEach(module('aamiApp'));

  // instantiate service
  var carModelsService;
  beforeEach(inject(function(_carModelsService_) {
    carModelsService = _carModelsService_;
  }));

  it('should do something', function() {
    expect(!!carModelsService).toBe(true);
  });

});