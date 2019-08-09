'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:ExternalsListCtrl
 * @description
 * # ExternalsListCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('ExternalsListCtrl', function ($scope, FireObjects, SubProjectPrefixer) {
    var externalModelsLocation = SubProjectPrefixer('externals');
    $scope.externalModelsLocation=externalModelsLocation;
    $scope.externals = FireObjects.all(externalModelsLocation)
  });
