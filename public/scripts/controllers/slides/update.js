'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:SlidesUpdateCtrl
 * @description
 * # SlidesUpdateCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('SlidesUpdateCtrl', function ($scope,$routeParams, FireObjects, SubProjectPrefixer) {
    var slideModelsLocation = SubProjectPrefixer('slides');
    $scope.slideModelsLocation=slideModelsLocation;
    FireObjects.find(slideModelsLocation, $routeParams.id).$loaded()
      .then(function(fireSlide) {
        $scope.slide = fireSlide;
        $scope.slide.updating = null;
      }, function(error) {
        $scope.errors = [error];
      });

    $scope.updateSlide = function(slide) {
      $scope.slide.updating = true;
      $scope.slide.status = null;

      $scope.slide.$save()
        .then(function(fireSlide) {
          $scope.slide.updating = null;
          $scope.slide.status = "Saved";
        }, function(error) {
          $scope.slide.updating = null;
          $scope.slide.status = "Error";
          $scope.errors = [error];
        });
    };


    $scope.removeSlide = function() {
      $scope.slide.removing = true;
      $scope.slide.$remove()
        .then(function(fireSlide) {
          $scope.slide.removing = null;
          $scope.changeRoute('#!/' + slideModelsLocation);
        }, function(error) {
          $scope.slide.removing = null;
          console.log('SlidesUpdateCtrl#removeSlide: ' + error);
        });
    };


    $scope.changeRoute = function(url, forceReload) {
      $scope = $scope || angular.element(document).scope();
      if(forceReload || $scope.$$phase) { // that's right TWO dollar signs: $$phase
        window.location = url;
      } else {
        $location.path(url);
        $scope.$apply();
      }
    };
  });
