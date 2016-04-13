'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:SlidesCreateCtrl
 * @description
 * # SlidesCreateCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('SlidesCreateCtrl', function ($scope, FireObjects, ModelCopier) {
    $scope.slide ={
      id : "fill-me",
      title : "Заглавие слайда",
      description : "Описание слайда",
      buttonName : "Надпись на кнопке",
      cover : "http://mitropolia.kiev.ua/wp-content/uploads/2016/03/DSC_03591.jpg",
      detailsLink: "#/news"
    };

    $scope.updateSlide = function(slide) {
      $scope.errors = null;
      $scope.slide.updating = true;
      $scope.slide.status = null;
      //load
      FireObjects.find('slides', slide.id).$loaded()
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