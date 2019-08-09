'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:ImageOrVideoModalCtrl
 * @description
 * # ImageOrVideoModalCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('ImageOrVideoModalCtrl', function ($scope, youtubeEmbedUtils, $uibModal) {
      //      should receive data as in scope
      //      $scope.data;

      var videoId;
      //show video with autoplay pop-up
      if ($scope.data.indexOf("youtu") > -1){
          videoId = youtubeEmbedUtils.getIdFromURL($scope.data);
          $scope.dirImg = "https://i.ytimg.com/vi/"+videoId+"/hqdefault.jpg";
          $scope.open = function () {
              var modalInstance = $uibModal.open({
                  animation: true,
                  template: '<div class="embed-responsive embed-responsive-16by9"><youtube-video class="embed-responsive-item" video-id="video" player-vars="playerVars"></youtube-video></div>',
                  controller: 'ModalInstanceCtrl',
                  size: 'lg',
                  resolve: {
                      video: function () {
                          console.log("[ImageOrVideoModalCtrl] video: " + videoId);
                          return videoId;
                      }
                  }
              });
          };
      //    or just image
      } else{
          $scope.dirImg = $scope.data;
          $scope.open = function (){};
      }
      $scope.videoId = videoId;
  });
