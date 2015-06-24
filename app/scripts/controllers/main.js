'use strict';

/**
 * @ngdoc function
 * @name aamiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aamiApp
 */
angular.module('aamiApp')
  .controller('MainCtrl', function($scope, manufactureYearsService, manufacturersService, carModelsService, carSearchService) {

    var activateSearchForm = function() {
      $scope.showCarSearchButton = true;
      $scope.showCarSearchResults = false;
    };

    activateSearchForm();

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
        $scope.carSearchResults = carSearchService.query({
          year: $scope.vehicleYearOfManufacture,
          manufacturer: $scope.vehicleMake,
          model: $scope.vehicleModel,
          transmissionType: $scope.vehicleTransmissionType,
          cylinderType: $scope.vehicleNumberOfCylinders,
          bodyType: $scope.vehicleBodyType
        });
      }
    };

    // initialize available manufacture years
    $scope.manufactureYears = manufactureYearsService.query();

    // update available manufacturers based on selected manufacture year
    $scope.$watch('vehicleYearOfManufacture', function(newValue) {
      activateSearchForm();
      if (angular.isNumber(newValue) && newValue > 1975) {
        $scope.manufacturers = manufacturersService.query({
          year: newValue
        });
      } else if (angular.isUndefined(newValue)) {
        $scope.vehicleMake = undefined;
      }
    });

    // update available car models based on selected manufacture year and manufacturer
    $scope.$watch('vehicleMake', function(newValue) {
      activateSearchForm();
      if (angular.isString(newValue)) {
        $scope.carModels = carModelsService.query({
          year: $scope.vehicleYearOfManufacture,
          manufacturer: newValue
        });
      } else if (angular.isUndefined(newValue)) {
        $scope.vehicleModel = undefined;
      }
    });

    $scope.$watch('vehicleModel ', function(newValue) {
      activateSearchForm();
      if (angular.isUndefined(newValue)) {
        $scope.vehicleTransmissionType = undefined;
      }
    });

    $scope.$watch('vehicleTransmissionType ', function(newValue) {
      activateSearchForm();
      if (angular.isUndefined(newValue)) {
        $scope.vehicleNumberOfCylinders = undefined;
        $scope.vehicleBodyType = undefined;
      }
    });

    $scope.$watch('vehicleNumberOfCylinders ', function() {
      activateSearchForm();
    });

    $scope.$watch('vehicleBodyType ', function() {
      activateSearchForm();
    });

  });
