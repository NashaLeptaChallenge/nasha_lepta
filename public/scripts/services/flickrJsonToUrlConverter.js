'use strict';

/**
 * @ngdoc service
 * @name nashaLeptaApp.FlickrJsonToUrlConverter
 * @description
 * # FlickrJsonToUrlConverter
 * Service in the nashaLeptaApp.
 */
angular.module('nashaLeptaApp')
  .service('FlickrJsonToUrlConverter', function () {
    return function(flickrJson){
      return flickrJson.photoset.photo.map(function(item){
        var url = 'https://farm' + item.farm + '.staticflickr.com/'
          + item.server + '/' + item.id + '_' + item.secret + '_z.jpg'
        return {
          thumb: url,
          thumbheight:800,
          thumbwidth: 600,
          url: url
        }
      });
    };
  });
