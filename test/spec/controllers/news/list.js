'use strict';

describe('Controller: NewsListCtrl', function () {


  var newsFixtures = [{
    id : "novelty1",
    summary : "краткое содержание 1 новости",
    cover : "https://lh1.googleusercontent.com/-Tpmm-JpPCH0/VKmwumMSD1I/AAAAAAAAHJ0/54lfCYAfR6Y1Pit_Q8S_SY74uo-DQ6HJQCHM/s912/NCH_5461.jpg",
    date : new Date(),
    body: "Текст новости 1"

  }, {
    id : "novelty1",
    summary : "краткое содержание 2 новости",
    cover : "https://lh2.googleusercontent.com/-Tpmm-JpPCH0/VKmwumMSD1I/AAAAAAAAHJ0/54lfCYAfR6Y1Pit_Q8S_SY74uo-DQ6HJQCHM/s912/NCH_5461.jpg",
    date : new Date(),
    body: "Текст новости 2"

  }];

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var NewsListCtrl,
    scope,
    FireObjects;

  beforeEach(inject(function (_FireObjects_) {
    FireObjects = _FireObjects_;
    spyOn(FireObjects, "all").and.callFake(function(models) {
      return newsFixtures;
    });
  }));


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewsListCtrl = $controller('NewsListCtrl', {
      $scope: scope,
      model: 'news'
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FireObjects).toBeDefined();
    expect(FireObjects.all).toHaveBeenCalled();
    expect(scope.news.length).toBe(2);
    //console.log("scope.albums[0].date: " + scope.albums[0].date);

    expect(scope.news[0].date).toEqual(jasmine.any(Date));

  });
});
