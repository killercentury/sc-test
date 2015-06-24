'use strict';

describe('find your car', function() {
  it('should find the car', function() {
    browser.get('/');
    element(by.id('productType1')).click();
    expect(element(by.model('productType')).getAttribute('value')).toEqual('COMPREHENSIVE');
    var date = new Date();
    var formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    element(by.id('policyStartDatePicker')).sendKeys(formattedDate);
    expect(element(by.model('policyStartDate')).getAttribute('value')).toEqual(formattedDate);
  });

  it('should see all error messages if only click the submit button', function() {
    browser.get('/');
    element(by.id('btn-find-car')).click();
    expect(element(by.id('product-type-error')).getText()).toEqual('Please select one insurance type above.');
    //expect(element(by.id('policy-start-date-error')).getText()).toEqual('Please select a policy start date from the calendar.');
    expect(element(by.id('manufacture-year-error')).getText()).toEqual('Please select the year of manufacture.');
    expect(element(by.id('car-make-error')).getText()).toEqual('Please select the car make.');
    expect(element(by.id('car-model-error')).getText()).toEqual('Please select the car model.');
    expect(element(by.id('transmission-type-error')).getText()).toEqual('Please select the transmission type.');
    expect(element(by.id('cylinder-type-error')).getText()).toEqual('Please select the number of cylinders.');
    expect(element(by.id('body-type-error')).getText()).toEqual('Please select the body type.');
  });
});