'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:ExternalsUpdateCtrl
 * @description
 * # ExternalsUpdateCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('ExternalsUpdateCtrl', function ($scope,$routeParams, FireObjects, SubProjectPrefixer, htmlToPlainText, youtubeEmbedUtils) {
    $scope.youtubeEmbedUtils = youtubeEmbedUtils;

    var externalModelsLocation = SubProjectPrefixer('externals');
    $scope.externalModelsLocation=externalModelsLocation;
    FireObjects.find(externalModelsLocation, $routeParams.id).$loaded()
      .then(function(fireNovelty) {
        $scope.external = fireNovelty;
        $scope.external.updating = null;
        $scope.external.date= new Date(fireNovelty.date);
      }, function(error) {
        $scope.errors = [error];
      });

    $scope.updateNovelty = function(external) {
      $scope.external.updating = true;
      $scope.external.status = null;

      $scope.external.date=$scope.external.date.getTime();

      $scope.external.$save()
        .then(function(fireNovelty) {
          $scope.external.date= new Date(fireNovelty.date);
          $scope.external.updating = null;
          $scope.external.status = "Saved";
        }, function(error) {
          $scope.external.date= new Date($scope.external.date);
          $scope.external.updating = null;
          $scope.external.status = "Error";
          $scope.errors = [error];
        });
    };


    $scope.removeNovelty = function() {
      $scope.external.removing = true;
      $scope.external.$remove()
        .then(function(fireNovelty) {
          $scope.external.removing = null;
          $scope.changeRoute('#!/' + externalModelsLocation);
        }, function(error) {
          $scope.external.removing = null;
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
      $scope.external.summary = htmlToPlainText($scope.external.body)
    }
  });
