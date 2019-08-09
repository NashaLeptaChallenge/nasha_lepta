'use strict';

/**
 * @ngdoc directive
 * @name nashaLeptaApp.directive:flickr
 * @description
 * # flickr
 */
angular.module('nashaLeptaApp')
  .directive('flickr', ['FlickrAlbumIdExtractor','FlickrAlbumFetcher', 'FlickrJsonToUrlConverter', function (FlickrAlbumIdExtractor, FlickrAlbumFetcher,FlickrJsonToUrlConverter ) {
    return {
      templateUrl: 'templates/vendor/picasa/picasa.html',
      restrict: 'A',
      scope: {
        flickr: '@'
      },
      controller :'GalleryLightboxCtrl',
      link: function(scope, element, attrs) {
        scope.$watch('flickr', function () {
          if (scope.flickr === '') {
            return;
          }
          var albumId = FlickrAlbumIdExtractor(scope.flickr);
          FlickrAlbumFetcher(albumId).then(function(data) {
            var photoObjects = FlickrJsonToUrlConverter(data.data);
            scope.photoObjects = photoObjects;
            scope.current = photoObjects[0];
            scope.ready = true;
          })
        });

        scope.setCurrent = function(photo) {
          scope.current = photo;
        };
        scope.move = function(event) {
          var thumbDiv = element[0].lastElementChild;
          var x = event.clientX - thumbDiv.offsetLeft;
          var center = thumbDiv.offsetWidth / 2;
          var factor = 20;

          var delta = (x - center)/center * factor;

          if (delta > 0 && thumbDiv.scrollLeft < (thumbDiv.scrollWidth - thumbDiv.clientWidth)) {
            thumbDiv.scrollLeft += delta;
          }
          if (delta < 0 && thumbDiv.scrollLeft > 0) {
            thumbDiv.scrollLeft += delta;
          }
        };
      }
    };
  }]);
