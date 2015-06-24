'use strict';

/**
 * @ngdoc service
 * @name aamiApp.manufactureYears
 * @description
 * # manufactureYears
 * Factory in the aamiApp.
 */
angular.module('aamiApp')
  .factory('manufactureYearsService', function($resource) {
    return $resource('data/manufactureYears.json', {}, {
      query: {
        method: 'GET',
        isArray: true
      }
    });
  });