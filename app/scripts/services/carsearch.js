'use strict';

/**
 * @ngdoc service
 * @name aamiApp.search
 * @description
 * # search
 * Factory in the aamiApp.
 */
angular.module('aamiApp')
  .factory('carSearchService', function($resource) {
    return $resource('data/carSearchResults.json', {}, {
      query: {
        method: 'GET',
        isArray: true
      }
    });
  });
