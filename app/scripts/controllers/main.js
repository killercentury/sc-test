'use strict';

/**
 * @ngdoc function
 * @name aamiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aamiApp
 */
angular.module('aamiApp')
  .controller('MainCtrl', function ($scope, $http) {
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

    $http.get('data/years.json').success(function (data) {
      $scope.yearsOfManufacture = data;
    });

    $http.get('data/manufacturers.json').success(function (data) {
      $scope.manufacturers = data;
    });

    $http.get('data/models.json').success(function (data) {
      $scope.models = data;
    });

  });
