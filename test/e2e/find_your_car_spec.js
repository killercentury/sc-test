'use strict';

describe('find your car', function() {

  beforeEach(function() {
    browser.get('/');
  });

  it('should find the car', function() {
    element(by.id('productType1')).click();
    expect(element(by.model('productType')).getAttribute('value')).toEqual('COMPREHENSIVE');
    var date = new Date();
    var formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    element(by.id('policyStartDatePicker')).sendKeys(formattedDate);
    expect(element(by.model('policyStartDate')).getAttribute('value')).toEqual(formattedDate);
    element(by.cssContainingText('option', '2015')).click();
    expect(element(by.cssContainingText('option', '2015')).isSelected()).toBe(true);
  });

  it('should see all error messages if only click the submit button', function() {
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

  it('should see depedent select boxes disabled', function() {
    expect(element(by.model('vehicleYearOfManufacture')).isEnabled()).toBe(true);
    expect(element(by.model('vehicleMake')).isEnabled()).toBe(false);
    expect(element(by.model('vehicleModel')).isEnabled()).toBe(false);
    expect(element(by.model('vehicleTransmissionType')).isEnabled()).toBe(false);
    expect(element(by.model('vehicleNumberOfCylinders')).isEnabled()).toBe(false);
    expect(element(by.model('vehicleBodyType')).isEnabled()).toBe(false);
  });

  it('should see popover once click the question sign', function() {
    expect(element(by.cssContainingText('.popover-title', 'Type of insurance')).isPresent()).toBe(false);
    element(by.id('popover-product-type')).click();
    expect(element(by.cssContainingText('.popover-title', 'Type of insurance')).isDisplayed()).toBe(true);
  });

});
