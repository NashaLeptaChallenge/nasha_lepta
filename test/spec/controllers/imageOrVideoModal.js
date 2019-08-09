'use strict';

describe('Controller: ImageOrVideoModalCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  var youtubeLink = "https://www.youtube.com/watch?v=NyK5q0AvI0U",
      imgLink = "https://docs.angularjs.org/img/angularjs-for-header-only.svg";



  var scope = {};
  scope.data = youtubeLink;


  describe('$scope.data', function() {
    it('data youtube', function() {
      var $scope = {};
      $scope.data = youtubeLink;
      var controller = $controller('ImageOrVideoModalCtrl', { $scope: $scope });
      expect($scope.videoId).toEqual('NyK5q0AvI0U');
      expect($scope.dirImg).toEqual('https://i.ytimg.com/vi/NyK5q0AvI0U/hqdefault.jpg');
    });
    it('data img', function() {
      var $scope = {};
      $scope.data = imgLink;
      var controller = $controller('ImageOrVideoModalCtrl', { $scope: $scope });
      expect($scope.videoId).toEqual(undefined);
    });
  });

});
