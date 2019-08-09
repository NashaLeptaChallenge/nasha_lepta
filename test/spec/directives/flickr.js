'use strict';

describe('Directive: flickr', function () {

  // load the directive's module
  beforeEach(module('nashaLeptaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div flickr="https://www.flickr.com/photos/144450420@N04/albums/72157671331275752"></div>');
    element = $compile(element)(scope);

    console.log("element:", element);
    console.log("element.text():", element.text());
    //expect(element.text()).toBe('this is the flickr directive');
  }));
});
