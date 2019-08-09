'use strict';

describe('Directive: imageOrVideoModal', function () {

  // load the directive's module
  beforeEach(module('nashaLeptaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  xit('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<image-or-video-modal data="https://docs.angularjs.org/img/angularjs-for-header-only.svg"></image-or-video-modal>');
    element = $compile(element)(scope);
    expect(element.html()).toContain('https://docs.angularjs.org/img/angularjs-for-header-only.svg');
  }));
});
