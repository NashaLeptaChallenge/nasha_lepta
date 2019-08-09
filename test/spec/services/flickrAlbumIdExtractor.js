'use strict';

describe('Service: FlickrAlbumIdExtractor', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var FlickrAlbumIdExtractor;
  beforeEach(inject(function (_FlickrAlbumIdExtractor_) {
    FlickrAlbumIdExtractor = _FlickrAlbumIdExtractor_;
  }));

  it('should do accessible', function () {
    expect(!!FlickrAlbumIdExtractor).toBe(true);
  });

  it('should do extract id correctly', function () {
    expect(FlickrAlbumIdExtractor('https://www.flickr.com/photos/144450420@N04/albums/72157671331275752')).toEqual('72157671331275752');
  });

});
