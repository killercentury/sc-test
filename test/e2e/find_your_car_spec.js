'use strict';

describe('find your car', function() {
  it('should find the car', function() {
    browser.get('/');
    element(by.id('productType1')).click();
    expect(element(by.model('productType')).getAttribute('value')).toEqual('COMPREHENSIVE');
    element(by.id('policyStartDatePicker')).sendKeys('27/06/2015');;
    expect(element(by.model('policyStartDate')).getAttribute('value')).toEqual('27/06/2015');
  });
});
