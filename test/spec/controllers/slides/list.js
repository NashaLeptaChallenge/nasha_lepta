'use strict';

describe('Controller: SlidesListCtrl', function () {

  var slideFixtures = [{
    id : "slide1",
    title : "Заглавие слайда",
    description : "Описание слайда",
    buttonName : "Надпись на кнопке",
    cover : "https://lh3.googleusercontent.com/-Tpmm-JpPCH0/VKmwumMSD1I/AAAAAAAAHJ0/54lfCYAfR6Y1Pit_Q8S_SY74uo-DQ6HJQCHM/s912/NCH_5461.jpg",
    detailsLink: "https://picasaweb.google.com/data/feed/base/user/111442129617636727768/slideid/6100601476767132305"
  }, {
    id : "slide2",
    title : "Заглавие слайда",
    description : "Описание слайда",
    buttonName : "Надпись на кнопке",
    cover : "https://lh3.googleusercontent.com/-Tpmm-JpPCH0/VKmwumMSD1I/AAAAAAAAHJ0/54lfCYAfR6Y1Pit_Q8S_SY74uo-DQ6HJQCHM/s912/NCH_5461.jpg",
    detailsLink: "https://picasaweb.google.com/data/feed/base/user/111442129617636727768/slideid/6100601476767132305"
  }];



  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var SlidesListCtrl,
    scope,
    FireObjects;

  beforeEach(inject(function (_FireObjects_) {
    FireObjects = _FireObjects_;
    spyOn(FireObjects, "all").and.callThrough();
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SlidesListCtrl = $controller('SlidesListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FireObjects).toBeDefined();
    expect(FireObjects.all).toHaveBeenCalled();
    expect(scope.slides.length).toBe(2);

  });
});
