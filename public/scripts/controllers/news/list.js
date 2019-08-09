'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:NewsListCtrl
 * @description
 * # NewsListCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('NewsListCtrl', function ($scope, FireObjects, SubProjectPrefixer, model) {
    var noveltyModelsLocation = SubProjectPrefixer(model);
    $scope.noveltyModelsLocation=noveltyModelsLocation;
    $scope.news = FireObjects.all(noveltyModelsLocation)
  });
