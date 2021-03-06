'use strict';

describe('find your car', function() {

  beforeEach(function() {
    browser.get('/');
  });

  it('should find the car', function() {
    element(by.id('productType1')).click();
    expect(element(by.model('productType')).getAttribute('value')).toEqual('COMPREHENSIVE');
    //element(by.id('policyStartDatePicker')).sendKeys(formattedDate);
    expect(element(by.model('policyStartDate')).getAttribute('value')).toBeTruthy();
    element(by.cssContainingText('option', '2015')).click();
    expect(element(by.cssContainingText('option', '2015')).isSelected()).toBe(true);
    element.all(by.cssContainingText('option', 'Audi')).first().click();
    expect(element.all(by.cssContainingText('option', 'Audi')).first().isSelected()).toBe(true);
    element(by.cssContainingText('option', 'A1')).click();
    expect(element(by.cssContainingText('option', 'A1')).isSelected()).toBe(true);
    element(by.cssContainingText('option', 'auto')).click();
    expect(element(by.cssContainingText('option', 'auto')).isSelected()).toBe(true);
    element(by.id('btn-find-car')).click();
    expect(element(by.id('product-type-error')).isDisplayed()).toBe(false);
    expect(element(by.id('policy-start-date-error')).isDisplayed()).toBe(false);
    expect(element(by.id('manufacture-year-error')).isDisplayed()).toBe(false);
    expect(element(by.id('car-make-error')).isDisplayed()).toBe(false);
    expect(element(by.id('car-model-error')).isDisplayed()).toBe(false);
    expect(element(by.id('transmission-type-error')).isDisplayed()).toBe(false);
    expect(element(by.id('btn-find-car')).isDisplayed()).toBe(false);
    expect(element(by.id('car-search-results-section')).isDisplayed()).toBe(true);
  });

  it('should see all error messages if only click the submit button', function() {
    element(by.id('btn-find-car')).click();
    expect(element(by.id('product-type-error')).getText()).toEqual('Please select one insurance type above.');
    expect(element(by.id('manufacture-year-error')).getText()).toEqual('Please select the year of manufacture.');
    expect(element(by.id('car-make-error')).getText()).toEqual('Please select the car make.');
    expect(element(by.id('car-model-error')).getText()).toEqual('Please select the car model.');
    expect(element(by.id('transmission-type-error')).getText()).toEqual('Please select the transmission type.');
  });

  it('should see depedent select boxes disabled', function() {
    expect(element(by.model('vehicleYearOfManufacture')).isEnabled()).toBe(true);
    expect(element(by.model('vehicleMake')).isEnabled()).toBe(false);
    expect(element(by.model('vehicleModel')).isEnabled()).toBe(false);
    expect(element(by.model('vehicleTransmissionType')).isEnabled()).toBe(false);
    expect(element(by.model('vehicleNumberOfCylinders')).isEnabled()).toBe(false);
    expect(element(by.model('vehicleBodyType')).isEnabled()).toBe(false);
  });

  it('should see children select boxes being reset and disabled if a parent select box switchs back to empty selection', function() {
    element(by.cssContainingText('option', '2015')).click();
    expect(element(by.cssContainingText('option', '2015')).isSelected()).toBe(true);
    element.all(by.cssContainingText('option', 'Audi')).first().click();
    expect(element.all(by.cssContainingText('option', 'Audi')).first().isSelected()).toBe(true);
    element(by.cssContainingText('#select-manufacture-year option', 'Select')).click();
    expect(element(by.cssContainingText('option', '2015')).isSelected()).toBe(false);
    expect(element.all(by.cssContainingText('option', 'Audi')).first().isSelected()).toBe(false);
    expect(element(by.model('vehicleMake')).isEnabled()).toBe(false);
  });

  it('should see search results disappear and search form re-activated if a select box change', function() {
    element(by.id('productType1')).click();
    element(by.cssContainingText('option', '2015')).click();
    element.all(by.cssContainingText('option', 'Audi')).first().click();
    element(by.cssContainingText('option', 'A1')).click();
    element(by.cssContainingText('option', 'auto')).click();
    element(by.id('btn-find-car')).click();
    expect(element(by.id('btn-find-car')).isDisplayed()).toBe(false);
    expect(element(by.id('car-search-results-section')).isDisplayed()).toBe(true);
    element(by.cssContainingText('option', 'manual')).click();
    expect(element(by.id('btn-find-car')).isDisplayed()).toBe(true);
    expect(element(by.id('car-search-results-section')).isDisplayed()).toBe(false);
  });

  it('should see popover once click the question sign', function() {

    expect(element(by.cssContainingText('.popover-title', 'Type of insurance')).isPresent()).toBe(false);
    element(by.id('popover-product-type')).click();
    browser.wait(function() {
      return browser.isElementPresent(by.cssContainingText('.popover-title', 'Type of insurance'));
    }, 5000);
    expect(element(by.cssContainingText('.popover-title', 'Type of insurance')).isDisplayed()).toBe(true);

    expect(element(by.cssContainingText('.popover-title', 'Year of manufacture')).isPresent()).toBe(false);
    element(by.id('popover-manufacture-year')).click();
    browser.wait(function() {
      return browser.isElementPresent(by.cssContainingText('.popover-title', 'Year of manufacture'));
    }, 5000);
    expect(element(by.cssContainingText('.popover-title', 'Year of manufacture')).isDisplayed()).toBe(true);

    expect(element(by.cssContainingText('.popover-title', 'Car make')).isPresent()).toBe(false);
    element(by.id('popover-car-make')).click();
    browser.wait(function() {
      return browser.isElementPresent(by.cssContainingText('.popover-title', 'Car make'));
    }, 5000);
    expect(element(by.cssContainingText('.popover-title', 'Car make')).isDisplayed()).toBe(true);

    expect(element(by.cssContainingText('.popover-title', 'Car model')).isPresent()).toBe(false);
    element(by.id('popover-car-model')).click();
    browser.wait(function() {
      return browser.isElementPresent(by.cssContainingText('.popover-title', 'Car model'));
    }, 5000);
    expect(element(by.cssContainingText('.popover-title', 'Car model')).isDisplayed()).toBe(true);

    expect(element(by.cssContainingText('.popover-title', 'Transmission type')).isPresent()).toBe(false);
    element(by.id('popover-transmission-type')).click();
    browser.wait(function() {
      return browser.isElementPresent(by.cssContainingText('.popover-title', 'Transmission type'));
    }, 5000);
    expect(element(by.cssContainingText('.popover-title', 'Transmission type')).isDisplayed()).toBe(true);

    expect(element(by.cssContainingText('.popover-title', 'Number of cylinders')).isPresent()).toBe(false);
    element(by.id('popover-cylinder-type')).click();
    browser.wait(function() {
      return browser.isElementPresent(by.cssContainingText('.popover-title', 'Number of cylinders'));
    }, 5000);
    expect(element(by.cssContainingText('.popover-title', 'Number of cylinders')).isDisplayed()).toBe(true);

    expect(element(by.cssContainingText('.popover-title', 'Body type')).isPresent()).toBe(false);
    element(by.id('popover-body-type')).click();
    browser.wait(function() {
      return browser.isElementPresent(by.cssContainingText('.popover-title', 'Body type'));
    }, 5000);
    expect(element(by.cssContainingText('.popover-title', 'Body type')).isDisplayed()).toBe(true);
  });

});
