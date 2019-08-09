'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:SlidesListCtrl
 * @description
 * # SlidesListCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('SlidesListCtrl', function ($scope, FireObjects, SubProjectPrefixer, $log) {
    $scope.slides = [{
      buttonName: "Помочь...",
      cover: "images/slides/children_day.f1eca941.jpg",
      description: "Добрых дел много не бывает))",
      detailsLink: "#!/requisites",
      id: "0",
      title: "Наша цель - помощь детям!"
    },
      {
        buttonName: "Подробнее...",
        cover: "images/slides/mitropolit.5104107d.jpg",
        description: "Благотворительный проект «Наша Лепта» создан по благословению  Блаженнейшего Митрополита Киевского и всей Украины Онуфрия и действует на базе храма святителя Николая Чудотворца при 17-й больнице города Киева.",
        detailsLink: "#!/about",
        id: "1",
        title: "\"Наша Лепта\""
      }];

    var slideModelsLocation = SubProjectPrefixer('slides');
    $scope.slideModelsLocation=slideModelsLocation;

    FireObjects.all(slideModelsLocation).$loaded().then(
      function(fireSlides){
        var combinedSlides = $scope.slides.concat(fireSlides);

        $scope.slides = combinedSlides;
      },
      function(error){
        $log.error('SlidesListCtrl#FireObjects.all: ' + error)
      }
    );
  });
