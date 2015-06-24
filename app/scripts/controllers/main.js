'use strict';

/**
 * @ngdoc function
 * @name aamiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aamiApp
 */
angular.module('aamiApp')
  .controller('MainCtrl', function($scope, $http, manufactureYearOptionsService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.dateOptions = {
      dateFormat: 'dd/mm/yy',
      minDate: 0,
      maxDate: 45
    };

    $scope.submit = function(form) {
      form.$setDirty();
      form.vehicleYearOfManufacture.$setTouched();
      form.vehicleMake.$setTouched();
      form.vehicleModel.$setTouched();
      form.vehicleTransmissionType.$setTouched();
    };

    $scope.manufactureYearOptions = manufactureYearOptionsService.query();

    $http.get('data/manufacturers.json').success(function(data) {
      $scope.manufacturers = data;
    });

    $http.get('data/models.json').success(function(data) {
      $scope.models = data;
    });

  });
