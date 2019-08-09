'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:ArticlesupdateCtrl
 * @description
 * # ArticlesupdateCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('ArticlesUpdateCtrl', function ($scope,$routeParams, FireObjects, SubProjectPrefixer ) {


    var articleModelsLocation = SubProjectPrefixer('articles');
    $scope.articleModelsLocation=articleModelsLocation;
    FireObjects.find(articleModelsLocation, $routeParams.id).$loaded()
      .then(function(fireArticle) {
        $scope.article = fireArticle;
        $scope.article.updating = null;
      }, function(error) {
        $scope.errors = [error];
      });

    $scope.updateArticle = function(article) {
      $scope.article.updating = true;
      $scope.article.status = null;
      $scope.article.$save()
        .then(function(fireArticle) {
          $scope.article.updating = null;
          $scope.article.status = "Saved";
        }, function(error) {
          $scope.article.updating = null;
          $scope.article.status = "Error";
          $scope.errors = [error];
        });
    };


    $scope.removeArticle = function() {
      $scope.article.removing = true;
      $scope.article.$remove()
        .then(function(fireArticle) {
          $scope.article.removing = null;
          $scope.changeRoute('#!/' + articleModelsLocation);
        }, function(error) {
          $scope.article.removing = null;
          console.log('ArticlesUpdateCtrl#removeArticle: ' + error);
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
