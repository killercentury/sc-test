'use strict';

/**
 * @ngdoc function
 * @name aamiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aamiApp
 */
angular.module('aamiApp')
  .controller('MainCtrl', function($scope, manufactureYearsService, manufacturersService, carModelsService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.showCarSearchButton = true;
    $scope.showCarSearchResults = false;

    $scope.dateOptions = {
      defaultDate: 0,
      dateFormat: 'dd/mm/yy',
      minDate: 0,
      maxDate: 45
    };

    $scope.policyStartDate = new Date();

    $scope.submit = function(form) {
      form.$setDirty();
      form.productType.$setDirty();
      form.policyStartDate.$setDirty();
      form.vehicleYearOfManufacture.$setTouched();
      form.vehicleMake.$setTouched();
      form.vehicleModel.$setTouched();
      form.vehicleTransmissionType.$setTouched();
      form.vehicleNumberOfCylinders.$setTouched();
      form.vehicleBodyType.$setTouched();

      if (form.$valid) {
        $scope.showCarSearchButton = false;
        $scope.showCarSearchResults = true;
      }
    };

    // initialize available manufacture years
    $scope.manufactureYears = manufactureYearsService.query();

    // update available manufacturers based on selected manufacture year
    $scope.$watch('vehicleYearOfManufacture', function(newValue) {
      if (angular.isNumber(newValue) && newValue > 1975) {
        $scope.manufacturers = manufacturersService.query({
          year: newValue
        });
      }
    });

    // update available car models based on selected manufacture year and manufacturer
    $scope.$watch('vehicleMake', function(newValue) {
      if (angular.isString(newValue)) {
        $scope.carModels = carModelsService.query({
          year: $scope.vehicleYearOfManufacture,
          manufacturer: newValue
        });
      }
    });

  });
