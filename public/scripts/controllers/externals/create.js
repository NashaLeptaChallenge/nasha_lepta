'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:ExternalsCreateCtrl
 * @description
 * # ExternalsCreateCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('ExternalsCreateCtrl', function ($scope, FireObjects, SubProjectPrefixer, ModelCopier, youtubeEmbedUtils) {

    $scope.youtubeEmbedUtils = youtubeEmbedUtils;
    
    $scope.external ={
      id : "fill-me",
      summary : "краткое содержание в сми",
      cover : "https://lh3.googleusercontent.com/-Tpmm-JpPCH0/VKmwumMSD1I/AAAAAAAAHJ0/54lfCYAfR6Y1Pit_Q8S_SY74uo-DQ6HJQCHM/s912/NCH_5461.jpg",
      date : new Date(),
      reference: "http://pravlife.org/content/protoierey-vladimir-kostochka-milostyu-bozhiey-chudotvornyh-ikon-stanovitsya-bolshe"
    };

    var externalModelsLocation = SubProjectPrefixer('externals');
    $scope.externalModelsLocation=externalModelsLocation;

    $scope.updateNovelty = function(external) {
      $scope.errors = null;
      $scope.external.updating = true;
      $scope.external.status = null;
      //load
      FireObjects.find(externalModelsLocation, external.id).$loaded()
        .then(function(fireNovelty) {
          //resave model from form
          ModelCopier(external, fireNovelty);
          //convert date to persistent form
          fireNovelty.date = $scope.external.date.getTime();
          //saving in firebase result
          fireNovelty.$save();
          $scope.external.updating = null;
          $scope.external.status = "Saved";
        }, function(error) {
          $scope.errors = [error];
          $scope.external.updating = null;
          $scope.external.status = "Error";
        });
    };
  });
