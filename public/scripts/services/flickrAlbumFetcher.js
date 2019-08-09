'use strict';

/**
 * @ngdoc service
 * @name nashaLeptaApp.FlickrAlbumFetcher
 * @description
 * # FlickrAlbumFetcher
 * Factory in the nashaLeptaApp.
 */
angular.module('nashaLeptaApp')
  .factory('FlickrAlbumFetcher', function ($http, FlickrKeyHolder) {
    return function(albumId){
      return $http({
        method: 'GET',
        url: 'https://api.flickr.com/services/rest/',
        params: {
          method : 'flickr.photosets.getPhotos',
          photoset_id : albumId,
          api_key: FlickrKeyHolder,
          format: 'json',
          nojsoncallback: 1
        }
      });
    }
  });
