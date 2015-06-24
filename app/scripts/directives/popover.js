'use strict';

/**
 * @ngdoc directive
 * @name aamiApp.directive:popover
 * @description
 * # popover
 */
angular.module('aamiApp')
  .directive('popover', function() {
    return {
      restrict: 'A',
      link: function() {
        angular.element('[data-toggle="popover"]').popover({
          html: true,
          container: 'body'
        });
      }
    };
  });
