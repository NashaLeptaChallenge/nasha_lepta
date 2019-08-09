'use strict';

/**
 * @ngdoc service
 * @name nashaLeptaApp.FireObjects
 * @description
 * # FireObjects
 * Factory in the nashaLeptaApp.
 */
angular.module('nashaLeptaApp')
  .factory('FireObjects', [
    'firebase',
    '$firebaseArray',
    '$firebaseObject',
    function FireObjectsFactory(firebase, $firebaseArray, $firebaseObject) {
      return {
        all: function(models) {
          return $firebaseArray(firebase.database().ref(models));
        },
        find: function(models, id){
          return $firebaseObject(firebase.database().ref(models).child(id));
        },
        update: function(model) {
          console.log('FireObjectsFactory: update method is blocked, use .$save() on $firebaseObject\n' +
          'Details on https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-firebaseobject-save');
        },
        create: function(models, id) {
          return $firebaseObject(firebase.database().ref(models).child(id));
        },
        findSingle:function(id){
          return $firebaseObject(firebase.database().ref(id));
        }
      };
    }
    ]);
