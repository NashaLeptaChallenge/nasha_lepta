'use strict';

describe('Controller: NewsCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var NewsCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewsCreateCtrl = $controller('NewsCreateCtrl', {
      $scope: scope,
      model: 'news'
      // place here mocked dependencies
    });
  }));

  it('check first object is setted correctly', function () {
    expect(scope.novelty).toBeDefined();
    expect(scope.novelty.id).toEqual("fill-me");
    expect(scope.novelty.summary).toEqual("краткое содержание новости");
    expect(scope.novelty.cover).toEqual("https://lh3.googleusercontent.com/-Tpmm-JpPCH0/VKmwumMSD1I/AAAAAAAAHJ0/54lfCYAfR6Y1Pit_Q8S_SY74uo-DQ6HJQCHM/s912/NCH_5461.jpg");
    expect(scope.novelty.date.getTime()).toBeLessThan(new Date().getTime()+10);
    expect(scope.novelty.date.getTime()).toBeGreaterThan(new Date("2016-01-01").getTime());
    expect(scope.novelty.body).toEqual("Текст новости");

  });

  it('check services are set correctly', function () {
    expect(scope.updateNovelty).toBeDefined();
  });
});
