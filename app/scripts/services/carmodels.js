'use strict';

/**
 * @ngdoc service
 * @name aamiApp.carModelsService
 * @description
 * # carModelsService
 * Factory in the aamiApp.
 */
angular.module('aamiApp')
  .factory('carModelsService', function($resource) {
    return $resource('data/carModels.json', {}, {
      query: {
        method: 'GET',
        isArray: true
      }
    });
  });