'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:NewsCreateCtrl
 * @description
 * # NewsCreateCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('NewsCreateCtrl', function ($scope, FireObjects, SubProjectPrefixer, ModelCopier, htmlToPlainText, model, youtubeEmbedUtils) {
    $scope.novelty ={
      id : "fill-me",
      summary : "краткое содержание новости",
      cover : "https://lh3.googleusercontent.com/-Tpmm-JpPCH0/VKmwumMSD1I/AAAAAAAAHJ0/54lfCYAfR6Y1Pit_Q8S_SY74uo-DQ6HJQCHM/s912/NCH_5461.jpg",
      date : new Date(),
      body: "Текст новости"
    };

    $scope.youtubeEmbedUtils = youtubeEmbedUtils;
    
    var noveltyModelsLocation = SubProjectPrefixer(model);
    $scope.noveltyModelsLocation=noveltyModelsLocation;

    $scope.updateNovelty = function(novelty) {
      $scope.errors = null;
      $scope.novelty.updating = true;
      $scope.novelty.status = null;
      //load
      FireObjects.find(noveltyModelsLocation, novelty.id).$loaded()
        .then(function(fireNovelty) {
          //resave model from form
          ModelCopier(novelty, fireNovelty);
          //convert date to persistent form
          fireNovelty.date = $scope.novelty.date.getTime();
          //saving in firebase result
          fireNovelty.$save();
          $scope.novelty.updating = null;
          $scope.novelty.status = "Saved";
        }, function(error) {
          $scope.errors = [error];
          $scope.novelty.updating = null;
          $scope.novelty.status = "Error";
        });
    };

    $scope.createSummaryFromBody = function(){
      $scope.novelty.summary = htmlToPlainText($scope.novelty.body)
    }
  });
