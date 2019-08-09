'use strict';

describe('Controller: NewsShowCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var NewsShowCtrl,
    scope,
    FireObjects;

  beforeEach(inject(function (_FireObjects_) {
    FireObjects = _FireObjects_;
    spyOn(FireObjects, "find").and.callThrough();
  }));


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewsShowCtrl = $controller('NewsShowCtrl', {
      $scope: scope,
      model: 'news'
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FireObjects.find).toHaveBeenCalled();
  });
});
