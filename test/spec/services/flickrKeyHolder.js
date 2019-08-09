'use strict';

describe('Service: FlickrKeyHolder', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var FlickrKeyHolder;
  beforeEach(inject(function (_FlickrKeyHolder_) {
    FlickrKeyHolder = _FlickrKeyHolder_;
  }));

  it('should do something', function () {
    expect(FlickrKeyHolder).toEqual('8363b2b29cfcebd78bd96138f4d4df83');
  });

});
