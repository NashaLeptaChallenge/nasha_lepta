'use strict';

describe('Controller: NewsUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var NewsUpdateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewsUpdateCtrl = $controller('NewsUpdateCtrl', {
      $scope: scope,
      model: 'news'
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.updateNovelty).toBeDefined();
    expect(scope.removeNovelty).toBeDefined();
    expect(scope.changeRoute).toBeDefined();
  });
});
