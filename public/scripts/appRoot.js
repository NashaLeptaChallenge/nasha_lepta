'use strict';

/**
 * @ngdoc overview
 * @name nashaLeptaApp
 * @description
 * # nashaLeptaApp
 *
 * Main module of the application.
 */
angular
  .module('nashaLeptaApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'firebase',
    'ngCkeditor',
    'angularPicasa',
    'ui.bootstrap',
    'uiGmapgoogle-maps',
    'ngSocial',
    'bootstrapLightbox',
    'youtube-embed'
  ])
  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      //    key: 'your api key',
      v: '3.22',
      libraries: 'weather,geometry,visualization'
    });
  })
  .config(function ($routeProvider) {
    for (var template in appRootRoutes.views){
      $routeProvider
        .when(
        '/' + appRootRoutes.views[template].url, {
          template: '<nl-article data="'+appRootRoutes.views[template].url+'" auth="auth"></nl-article>'
        }
      );
    }
    $routeProvider
      .when('/', {
        templateUrl: 'templates/pages/landing.html',
        controller: 'LandingCtrl'
      })
      .when('/exposition', {
        templateUrl: 'templates/pages/landing.html',
        controller: 'LandingCtrl'
      })
      .when('/evenings', {
        templateUrl: 'templates/pages/landing.html',
        controller: 'LandingCtrl'
      })
      .when('/accounting', {
        templateUrl: 'templates/pages/landing.html',
        controller: 'LandingCtrl'
      })
      .when('/auth', {
        templateUrl: 'templates/pages/auth.html',
        controller: 'AuthCtrl'
      })
      .when('/articles', {
        templateUrl: 'templates/pages/articles/list.html',
        controller: 'ArticlesListCtrl'
      })
      .when('/articles/new', {
        templateUrl: 'templates/pages/articles/edit.html',
        controller: 'ArticlesCreateCtrl'
      })
      .when('/articles/:id', {
        templateUrl: 'templates/pages/articles/show.html',
        controller: 'ArticlesShowCtrl'
      })
      .when('/articles/:id/edit', {
        templateUrl: 'templates/pages/articles/edit.html',
        controller: 'ArticlesUpdateCtrl'
      })
      .when('/slides', {
        templateUrl: 'templates/pages/slides/list.html',
        controller: 'SlidesListCtrl'
      })
      .when('/slides/new', {
        templateUrl: 'templates/pages/slides/edit.html',
        controller: 'SlidesCreateCtrl'
      })
      .when('/slides/:id', {
        templateUrl: 'templates/pages/slides/show.html',
        controller: 'SlidesShowCtrl'
      })
      .when('/slides/:id/edit', {
        templateUrl: 'templates/pages/slides/edit.html',
        controller: 'SlidesUpdateCtrl'
      })
      .when('/albums', {
        templateUrl: 'templates/pages/albums/list.html',
        controller: 'AlbumsListCtrl'
      })
      .when('/albums/new', {
        templateUrl: 'templates/pages/albums/edit.html',
        controller: 'AlbumsCreateCtrl'
      })
      .when('/albums/:id', {
        templateUrl: 'templates/pages/albums/show.html',
        controller: 'AlbumsShowCtrl'
      })
      .when('/albums/:id/edit', {
        templateUrl: 'templates/pages/albums/edit.html',
        controller: 'AlbumsUpdateCtrl'
      })
      .when('/news', {
        templateUrl: 'templates/pages/news/list.html',
        controller: 'NewsListCtrl',
        resolve: {
          model: function () {
            return "news";
          }
        }
      })
      .when('/news/new', {
        templateUrl: 'templates/pages/news/edit.html',
        controller: 'NewsCreateCtrl',
        resolve: {
          model: function () {
            return "news";
          }
        }
      })
      .when('/news/:id', {
        templateUrl: 'templates/pages/news/show.html',
        controller: 'NewsShowCtrl',
        resolve: {
          model: function () {
            return "news";
          }
        }
      })
      .when('/news/:id/edit', {
        templateUrl: 'templates/pages/news/edit.html',
        controller: 'NewsUpdateCtrl',
        resolve: {
          model: function () {
            return "news";
          }
        }
      })
      .when('/actions', {
        templateUrl: 'templates/pages/news/list.html',
        controller: 'NewsListCtrl',
        resolve: {
          model: function () {
            return "actions";
          }
        }
      })
      .when('/actions/new', {
        templateUrl: 'templates/pages/news/edit.html',
        controller: 'NewsCreateCtrl',
        resolve: {
          model: function () {
            return "actions";
          }
        }
      })
      .when('/actions/:id', {
        templateUrl: 'templates/pages/news/show.html',
        controller: 'NewsShowCtrl',
        resolve: {
          model: function () {
            return "actions";
          }
        }
      })
      .when('/actions/:id/edit', {
        templateUrl: 'templates/pages/news/edit.html',
        controller: 'NewsUpdateCtrl',
        resolve: {
          model: function () {
            return "actions";
          }
        }
      })
      .when('/externals', {
        templateUrl: 'templates/pages/externals/list.html',
        controller: 'ExternalsListCtrl'
      })
      .when('/externals/new', {
        templateUrl: 'templates/pages/externals/edit.html',
        controller: 'ExternalsCreateCtrl'
      })
      .when('/externals/:id/edit', {
        templateUrl: 'templates/pages/externals/edit.html',
        controller: 'ExternalsUpdateCtrl'
      })
      .when('/video-gallery', {
        templateUrl: 'templates/pages/video-gallery/list.html',
        controller: 'VideoGalleryListCtrl'
      })
      .when('/video-gallery/edit', {
        templateUrl: 'templates/pages/video-gallery/edit.html',
        controller: 'VideoGalleryUpdateCtrl'
      })


      .when('/exposition/articles', {
        templateUrl: 'templates/pages/articles/list.html',
        controller: 'ArticlesListCtrl'
      })
      .when('/exposition/articles/new', {
        templateUrl: 'templates/pages/articles/edit.html',
        controller: 'ArticlesCreateCtrl'
      })
      .when('/exposition/articles/:id', {
        templateUrl: 'templates/pages/articles/show.html',
        controller: 'ArticlesShowCtrl'
      })
      .when('/exposition/articles/:id/edit', {
        templateUrl: 'templates/pages/articles/edit.html',
        controller: 'ArticlesUpdateCtrl'
      })
      .when('/exposition/slides', {
        templateUrl: 'templates/pages/slides/list.html',
        controller: 'SlidesListCtrl'
      })
      .when('/exposition/slides/new', {
        templateUrl: 'templates/pages/slides/edit.html',
        controller: 'SlidesCreateCtrl'
      })
      .when('/exposition/slides/:id', {
        templateUrl: 'templates/pages/slides/show.html',
        controller: 'SlidesShowCtrl'
      })
      .when('/exposition/slides/:id/edit', {
        templateUrl: 'templates/pages/slides/edit.html',
        controller: 'SlidesUpdateCtrl'
      })
      .when('/exposition/albums', {
        templateUrl: 'templates/pages/albums/list.html',
        controller: 'AlbumsListCtrl'
      })
      .when('/exposition/albums/new', {
        templateUrl: 'templates/pages/albums/edit.html',
        controller: 'AlbumsCreateCtrl'
      })
      .when('/exposition/albums/:id', {
        templateUrl: 'templates/pages/albums/show.html',
        controller: 'AlbumsShowCtrl'
      })
      .when('/exposition/albums/:id/edit', {
        templateUrl: 'templates/pages/albums/edit.html',
        controller: 'AlbumsUpdateCtrl'
      })
      .when('/exposition/news', {
        templateUrl: 'templates/pages/news/list.html',
        controller: 'NewsListCtrl',
        resolve: {
          model: function () {
            return "news";
          }
        }
      })
      .when('/exposition/news/new', {
        templateUrl: 'templates/pages/news/edit.html',
        controller: 'NewsCreateCtrl',
        resolve: {
          model: function () {
            return "news";
          }
        }
      })
      .when('/exposition/news/:id', {
        templateUrl: 'templates/pages/news/show.html',
        controller: 'NewsShowCtrl',
        resolve: {
          model: function () {
            return "news";
          }
        }
      })
      .when('/exposition/news/:id/edit', {
        templateUrl: 'templates/pages/news/edit.html',
        controller: 'NewsUpdateCtrl',
        resolve: {
          model: function () {
            return "news";
          }
        }
      })
      .when('/exposition/video-gallery', {
        templateUrl: 'templates/pages/video-gallery/list.html',
        controller: 'VideoGalleryListCtrl'
      })
      .when('/exposition/video-gallery/edit', {
        templateUrl: 'templates/pages/video-gallery/edit.html',
        controller: 'VideoGalleryUpdateCtrl'
      })


      .when('/evenings/articles', {
        templateUrl: 'templates/pages/articles/list.html',
        controller: 'ArticlesListCtrl'
      })
      .when('/evenings/articles/new', {
        templateUrl: 'templates/pages/articles/edit.html',
        controller: 'ArticlesCreateCtrl'
      })
      .when('/evenings/articles/:id', {
        templateUrl: 'templates/pages/articles/show.html',
        controller: 'ArticlesShowCtrl'
      })
      .when('/evenings/articles/:id/edit', {
        templateUrl: 'templates/pages/articles/edit.html',
        controller: 'ArticlesUpdateCtrl'
      })
      .when('/evenings/slides', {
        templateUrl: 'templates/pages/slides/list.html',
        controller: 'SlidesListCtrl'
      })
      .when('/evenings/slides/new', {
        templateUrl: 'templates/pages/slides/edit.html',
        controller: 'SlidesCreateCtrl'
      })
      .when('/evenings/slides/:id', {
        templateUrl: 'templates/pages/slides/show.html',
        controller: 'SlidesShowCtrl'
      })
      .when('/evenings/slides/:id/edit', {
        templateUrl: 'templates/pages/slides/edit.html',
        controller: 'SlidesUpdateCtrl'
      })
      .when('/evenings/albums', {
        templateUrl: 'templates/pages/albums/list.html',
        controller: 'AlbumsListCtrl'
      })
      .when('/evenings/albums/new', {
        templateUrl: 'templates/pages/albums/edit.html',
        controller: 'AlbumsCreateCtrl'
      })
      .when('/evenings/albums/:id', {
        templateUrl: 'templates/pages/albums/show.html',
        controller: 'AlbumsShowCtrl'
      })
      .when('/evenings/albums/:id/edit', {
        templateUrl: 'templates/pages/albums/edit.html',
        controller: 'AlbumsUpdateCtrl'
      })
      .when('/evenings/news', {
        templateUrl: 'templates/pages/news/list.html',
        controller: 'NewsListCtrl',
        resolve: {
          model: function () {
            return "news";
          }
        }
      })
      .when('/evenings/news/new', {
        templateUrl: 'templates/pages/news/edit.html',
        controller: 'NewsCreateCtrl',
        resolve: {
          model: function () {
            return "news";
          }
        }
      })
      .when('/evenings/news/:id', {
        templateUrl: 'templates/pages/news/show.html',
        controller: 'NewsShowCtrl',
        resolve: {
          model: function () {
            return "news";
          }
        }
      })
      .when('/evenings/news/:id/edit', {
        templateUrl: 'templates/pages/news/edit.html',
        controller: 'NewsUpdateCtrl',
        resolve: {
          model: function () {
            return "news";
          }
        }
      })
      .when('/evenings/video-gallery', {
        templateUrl: 'templates/pages/video-gallery/list.html',
        controller: 'VideoGalleryListCtrl'
      })
      .when('/evenings/video-gallery/edit', {
        templateUrl: 'templates/pages/video-gallery/edit.html',
        controller: 'VideoGalleryUpdateCtrl'
      })


      .when('/accounting/articles', {
        templateUrl: 'templates/pages/articles/list.html',
        controller: 'ArticlesListCtrl'
      })
      .when('/accounting/articles/new', {
        templateUrl: 'templates/pages/articles/edit.html',
        controller: 'ArticlesCreateCtrl'
      })
      .when('/accounting/articles/:id', {
        templateUrl: 'templates/pages/articles/show.html',
        controller: 'ArticlesShowCtrl'
      })
      .when('/accounting/articles/:id/edit', {
        templateUrl: 'templates/pages/articles/edit.html',
        controller: 'ArticlesUpdateCtrl'
      })
      .when('/accounting/slides', {
        templateUrl: 'templates/pages/slides/list.html',
        controller: 'SlidesListCtrl'
      })
      .when('/accounting/slides/new', {
        templateUrl: 'templates/pages/slides/edit.html',
        controller: 'SlidesCreateCtrl'
      })
      .when('/accounting/slides/:id', {
        templateUrl: 'templates/pages/slides/show.html',
        controller: 'SlidesShowCtrl'
      })
      .when('/accounting/slides/:id/edit', {
        templateUrl: 'templates/pages/slides/edit.html',
        controller: 'SlidesUpdateCtrl'
      })
      .when('/accounting/albums', {
        templateUrl: 'templates/pages/albums/list.html',
        controller: 'AlbumsListCtrl'
      })
      .when('/accounting/albums/new', {
        templateUrl: 'templates/pages/albums/edit.html',
        controller: 'AlbumsCreateCtrl'
      })
      .when('/accounting/albums/:id', {
        templateUrl: 'templates/pages/albums/show.html',
        controller: 'AlbumsShowCtrl'
      })
      .when('/accounting/albums/:id/edit', {
        templateUrl: 'templates/pages/albums/edit.html',
        controller: 'AlbumsUpdateCtrl'
      })
      .when('/accounting/news', {
        templateUrl: 'templates/pages/news/list.html',
        controller: 'NewsListCtrl',
        resolve: {
          model: function () {
            return "news";
          }
        }
      })
      .when('/accounting/news/new', {
        templateUrl: 'templates/pages/news/edit.html',
        controller: 'NewsCreateCtrl',
        resolve: {
          model: function () {
            return "news";
          }
        }
      })
      .when('/accounting/news/:id', {
        templateUrl: 'templates/pages/news/show.html',
        controller: 'NewsShowCtrl',
        resolve: {
          model: function () {
            return "news";
          }
        }
      })
      .when('/accounting/news/:id/edit', {
        templateUrl: 'templates/pages/news/edit.html',
        controller: 'NewsUpdateCtrl',
        resolve: {
          model: function () {
            return "news";
          }
        }
      })
      .when('/accounting/video-gallery', {
        templateUrl: 'templates/pages/video-gallery/list.html',
        controller: 'VideoGalleryListCtrl'
      })
      .when('/accounting/video-gallery/edit', {
        templateUrl: 'templates/pages/video-gallery/edit.html',
        controller: 'VideoGalleryUpdateCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });

  })
  .config(function (LightboxProvider) {
    LightboxProvider.getImageUrl = function (imageUrl) {
      console.log('typeof imageUrl === String' + (typeof imageUrl === 'string'));
      if(typeof imageUrl === 'string'){
        return imageUrl;
      }
      console.log(imageUrl);
      return imageUrl.url;
    };
    LightboxProvider.templateUrl = 'templates/vendor/lightbox/pop-up-template.html';
  });
