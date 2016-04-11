'use strict';

describe('Controller: SlidesCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var SlidesCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SlidesCreateCtrl = $controller('SlidesCreateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('check first object is setted correctly', function () {
    expect(scope.slide).toBeDefined();
    expect(scope.slide.id).toEqual("fill-me");
    expect(scope.slide.title).toEqual("Заглавие слайда");
    expect(scope.slide.description).toEqual("Описание слайда");
    expect(scope.slide.buttonName).toEqual("Надпись на кнопке");
    expect(scope.slide.cover).toEqual("https://lh3.googleusercontent.com/-Tpmm-JpPCH0/VKmwumMSD1I/AAAAAAAAHJ0/54lfCYAfR6Y1Pit_Q8S_SY74uo-DQ6HJQCHM/s912/NCH_5461.jpg");
    expect(scope.slide.detailsLink).toEqual("https://picasaweb.google.com/data/feed/base/user/111442129617636727768/slideid/6100601476767132305");
  });
  it('check services are set correctly', function () {
    expect(scope.updateSlide).toBeDefined();
  });
});
