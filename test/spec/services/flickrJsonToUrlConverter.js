'use strict';

describe('Service: FlickrJsonToUrlConverter', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var FlickrJsonToUrlConverter, flickrJson;



  beforeEach(inject(function (_FlickrJsonToUrlConverter_) {
    FlickrJsonToUrlConverter = _FlickrJsonToUrlConverter_;
    flickrJson = readJSON('test/mock/flickr.json');
  }));

  it('should check if service availeble', function () {
    expect(!!FlickrJsonToUrlConverter).toBe(true);
  });

  it('should convert json correctly', function () {
    expect(FlickrJsonToUrlConverter(flickrJson)[0].thumb).toEqual("https://farm9.staticflickr.com/8851/28259548663_11a075c77f_z.jpg");
  });

});
