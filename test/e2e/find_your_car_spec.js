'use strict';

describe('find your car', function () {
  it('should find the car', function () {
    browser.get('/');
    element(by.id('productType1')).click();
    expect(element(by.model('productType')).getAttribute('value')).toEqual('COMPREHENSIVE');
    var date = new Date();
    var formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    element(by.id('policyStartDatePicker')).sendKeys(formattedDate);
    expect(element(by.model('policyStartDate')).getAttribute('value')).toEqual(formattedDate);
  });
});
