'use strict';

/**
 * @ngdoc directive
 * @name nashaLeptaApp.directive:imageOrVideoModal
 * @description
 * # imageOrVideoModal
 */
angular.module('nashaLeptaApp')
    .directive('imageOrVideoModal', function () {
        return {
            templateUrl: 'templates/directives/image-or-video-modal.html',
            restrict: 'E',
            scope :{
                data : '@'
            },
            controller : 'ImageOrVideoModalCtrl'
        };
    });
