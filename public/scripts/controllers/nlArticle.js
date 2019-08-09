'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:NlArticleCtrl
 * @description
 * # NlArticleCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('NlArticleCtrl', function ($scope, editorOptions, $sce, IsNeedToCompileFurther, firebase, $firebaseObject) {

    $scope.editorOptions = editorOptions;

    $firebaseObject(firebase.database().ref($scope.data)).$loaded()
      .then(function(data) {
        //create one object for better understanding
        var value = data.$value;
        $scope.toEdit = data;
        //Check if we need to compile further or directly inject html
        if(IsNeedToCompileFurther(value)){
          $scope.toShow=null;
          $scope.toShowCompile=value;
        }else{
          $scope.toShow = $sce.trustAsHtml(value);
          $scope.toShowCompile=null;
        }
      })
      .catch(function(error) {
        console.error("Error:", error);
      });

    $scope.edit = function () {
      $scope.isEdit = true;
      $scope.isPreview = false;
    };

    $scope.preview = function(){
      $scope.isPreview = true;
      var value = $scope.toEdit.$value;
      //Check if we need to compile further or directly inject html
      if(IsNeedToCompileFurther(value)){
        $scope.toShow=null;
        $scope.toShowCompile=value;
      }else{
        $scope.toShow = $sce.trustAsHtml(value);
        $scope.toShowCompile=null;
      }
    };

    $scope.save = function(){
      $scope.toEdit.$save();
      $scope.toShow =$sce.trustAsHtml($scope.toEdit.$value);
      $scope.isEdit = false;
    };
  });
