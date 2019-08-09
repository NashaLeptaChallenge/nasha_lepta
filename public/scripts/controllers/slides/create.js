'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:SlidesCreateCtrl
 * @description
 * # SlidesCreateCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('SlidesCreateCtrl', function ($scope, FireObjects, SubProjectPrefixer, ModelCopier) {
    $scope.slide ={
      id : "fill-me",
      title : "Заглавие слайда",
      description : "Описание слайда",
      buttonName : "Надпись на кнопке",
      cover : "images/slides/children_day.f1eca941.jpg",
      detailsLink: "#!/news"
    };

    var slideModelsLocation = SubProjectPrefixer('slides');
    $scope.slideModelsLocation=slideModelsLocation;

    $scope.updateSlide = function(slide) {
      $scope.errors = null;
      $scope.slide.updating = true;
      $scope.slide.status = null;
      //load
      FireObjects.find(slideModelsLocation, slide.id).$loaded()
        .then(function(fireSlide) {
          //resave model from form
          ModelCopier(slide, fireSlide);
          //saving in firebase result
          fireSlide.$save();
          $scope.slide.updating = null;
          $scope.slide.status = "Saved";
        }, function(error) {
          $scope.errors = [error];
          $scope.slide.updating = null;
          $scope.slide.status = "Error";
        });
    };
  });
