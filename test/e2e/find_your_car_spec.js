'use strict';

describe('find your car', function() {
  it('should find the car', function() {
    browser.get('/');
    element(by.id('productType1')).click();
    expect(element(by.model('productType')).getAttribute('value')).toEqual('COMPREHENSIVE');
  });
});