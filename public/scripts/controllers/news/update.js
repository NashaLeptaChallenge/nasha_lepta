'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:NewsUpdateCtrl
 * @description
 * # NewsUpdateCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('NewsUpdateCtrl', function ($scope,$routeParams, FireObjects, SubProjectPrefixer, htmlToPlainText, model, youtubeEmbedUtils) {

    $scope.youtubeEmbedUtils = youtubeEmbedUtils;

    var noveltyModelsLocation = SubProjectPrefixer(model);
    $scope.noveltyModelsLocation=noveltyModelsLocation;
    FireObjects.find(noveltyModelsLocation, $routeParams.id).$loaded()
      .then(function(fireNovelty) {
        $scope.novelty = fireNovelty;
        $scope.novelty.updating = null;
        $scope.novelty.date= new Date(fireNovelty.date);
      }, function(error) {
        $scope.errors = [error];
      });

    $scope.updateNovelty = function(novelty) {
      $scope.novelty.updating = true;
      $scope.novelty.status = null;

      $scope.novelty.date=$scope.novelty.date.getTime();

      $scope.novelty.$save()
        .then(function(fireNovelty) {
          $scope.novelty.date= new Date(fireNovelty.date);
          $scope.novelty.updating = null;
          $scope.novelty.status = "Saved";
        }, function(error) {
          $scope.novelty.date= new Date($scope.novelty.date);
          $scope.novelty.updating = null;
          $scope.novelty.status = "Error";
          $scope.errors = [error];
        });
    };


    $scope.removeNovelty = function() {
      $scope.novelty.removing = true;
      $scope.novelty.$remove()
        .then(function(fireNovelty) {
          $scope.novelty.removing = null;
          $scope.changeRoute('#!/' + noveltyModelsLocation);
        }, function(error) {
          $scope.novelty.removing = null;
          console.log('NoveltysUpdateCtrl#removeNovelty: ' + error);
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

    $scope.createSummaryFromBody = function(){
      $scope.novelty.summary = htmlToPlainText($scope.novelty.body)
    }
  });
