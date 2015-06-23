'use strict';

/**
 * @ngdoc directive
 * @name aamiApp.directive:accessibleForm
 * @description
 * # accessibleForm
 */
angular.module('aamiApp')
  .directive('accessibleForm', function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
        element.on('submit', function() {
          var firstInvalid = element[0].querySelector('.ng-invalid');
          if (firstInvalid) {
            firstInvalid.focus();
          }
        });
      }
    };
  });
