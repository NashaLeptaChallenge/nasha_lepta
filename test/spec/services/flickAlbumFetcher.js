'use strict';

describe('Service: FlickrAlbumFetcher', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  //beforeEach(angular.mock.http.init);
  //afterEach(angular.mock.http.reset);

  var $httpBackend, flickrListResponseJson, fetchResult;

  // instantiate service
  var FlickrAlbumFetcher;
  beforeEach(inject(function (_FlickrAlbumFetcher_, _$httpBackend_) {
    FlickrAlbumFetcher = _FlickrAlbumFetcher_;
    $httpBackend=_$httpBackend_;
    flickrListResponseJson = readJSON('test/mock/flickr.json');
  }));


  it('FlickrAlbumFetcher should be defined', function () {
    expect(!!FlickrAlbumFetcher).toBe(true);
    expect(FlickrAlbumFetcher('23')).toBeDefined();
  });

  it('FlickrAlbumFetcher should return correct data', function () {
    FlickrAlbumFetcher('72157671331275752')
      .then(
        function(result){
          fetchResult = result.data;
        }, function(){
          console.log('error in callback');
        });

    //$httpBackend.whenGET('https://api.flickr.com/services/rest/?api_key=8363b2b29cfcebd78bd96138f4d4df83&format=json&method=flickr.photosets.getPhotos&nojsoncallback=1&photoset_id=72157671331275752')
    //  .respond(flickrListResponseJson);
    $httpBackend.whenGET(/.*?/g)
      .respond(flickrListResponseJson);

    $httpBackend.flush();

    expect(fetchResult).toBeDefined();
    expect(fetchResult.photoset).toBeDefined();
    expect(fetchResult.photoset.photo).toBeDefined();
    expect(fetchResult.photoset.photo[0]).toBeDefined();
    expect(fetchResult.photoset.photo[0].id).toEqual('28259548663');
  });

});
