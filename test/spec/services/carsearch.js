'use strict';

describe('Service: carSearchService', function() {

  // load the service's module
  beforeEach(module('aamiApp'));

  // instantiate service
  var carSearchService;
  beforeEach(inject(function(_carSearchService_) {
    carSearchService = _carSearchService_;
  }));

  it('should do something', function() {
    expect(!!carSearchService).toBe(true);
  });

});
