'use strict';

/**
 * @ngdoc service
 * @name aamiApp.manufacturersService
 * @description
 * # manufacturersService
 * Factory in the aamiApp.
 */
angular.module('aamiApp')
  .factory('manufacturersService', function ($resource) {
    return $resource('data/manufacturers.json', {}, {
      query: {
        method: 'GET',
        isArray: true
      }
    });
  });
