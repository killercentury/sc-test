'use strict';

/**
 * @ngdoc function
 * @name aamiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aamiApp
 */
angular.module('aamiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
