'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('AuthCtrl', [
    '$scope', '$rootScope', '$firebaseAuth', 'firebase',
    function($scope, $rootScope, $firebaseAuth, firebase) {
      $rootScope.auth = $firebaseAuth(firebase.auth());
      $scope.isShowLogin =false;

      $scope.signIn = function () {
        $rootScope.auth.$signInWithEmailAndPassword($scope.email, $scope.password)
          .then(function(authData) {
          //console.log("Logged in as:", authData.uid);
          $rootScope.auth.user = authData.email;
          //console.log($scope.auth);
        }).catch(function(error) {
          console.error("Authentication failed:", error);
        });
      };

      $scope.logOut = function () {
        $rootScope.auth.$signOut();
        $rootScope.auth.user=null;
      };

      $scope.showLogin = function () {
        $scope.isShowLogin=!$scope.isShowLogin;
      };

    }
  ]);
