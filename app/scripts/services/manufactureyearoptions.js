'use strict';

/**
 * @ngdoc service
 * @name aamiApp.manufactureYearOptions
 * @description
 * # manufactureYearOptions
 * Factory in the aamiApp.
 */
angular.module('aamiApp')
  .factory('manufactureYearOptionsService', function($resource) {
    return $resource('data/manufactureYearOptions.json', {}, {
      query: {
        method: 'GET',
        isArray: true
      }
    });
  });