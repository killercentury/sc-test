'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('aamiApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should initialize a list of properties to the scope', function () {
    expect(scope.showCarSearchButton).toBe(true);
    expect(scope.showCarSearchResults).toBe(false);
  });
});
