'use strict';

/**
 * @ngdoc service
 * @name nashaLeptaApp.PlayListIdExtractor
 * @description
 * # PlayListIdExtractor
 * Factory in the nashaLeptaApp.
 */
angular.module('nashaLeptaApp')
  .factory('PlayListIdExtractor', function () {

    function youtubeValidate(url) {
      var regExp = /^(?:https?:\/\/)?(?:www\.)?youtube\.com(?:\S+)?$/;
      return url.match(regExp)&&url.match(regExp).length>0;
    }

    return function (url){
      var reg = new RegExp("[&?]list=([a-z0-9_\-]+)","i");
      var match = reg.exec(url);
      if (match&&match[1].length>0&&youtubeValidate(url)){
        return match[1];
      }else{
        return "nope";
      }
    }
  });
