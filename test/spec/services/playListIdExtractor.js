'use strict';

describe('Service: PlayListIdExtractor', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var PlayListIdExtractor;
  beforeEach(inject(function (_PlayListIdExtractor_) {
    PlayListIdExtractor = _PlayListIdExtractor_;
  }));
  // instantiate service
  var youtubeEmbedUtils;
  beforeEach(inject(function (_youtubeEmbedUtils_) {
    youtubeEmbedUtils = _youtubeEmbedUtils_;
  }));

  it('should do something', function () {
    expect(PlayListIdExtractor).toBeDefined();
    expect(PlayListIdExtractor('')).toBeDefined();
    expect(PlayListIdExtractor('')).toEqual('nope');
    expect(PlayListIdExtractor('https://www.youtube.com/playlist?list=PLWhoXtydVppp0XmSupI6CJ74qGcbk4zY8')).toEqual('PLWhoXtydVppp0XmSupI6CJ74qGcbk4zY8');
    expect(PlayListIdExtractor('https://www.youtube.com/watch?v=0Z-sG2qLHwc&list=PLWhoXtydVppp0XmSupI6CJ74qGcbk4zY8&index=1')).toEqual('PLWhoXtydVppp0XmSupI6CJ74qGcbk4zY8');
    expect(PlayListIdExtractor('https://www.youtube.com/playlist?list=PLWhoXtydVpprnYSH5Jb26w-Q5ZlfzSMu8')).toEqual('PLWhoXtydVpprnYSH5Jb26w-Q5ZlfzSMu8');

    expect(youtubeEmbedUtils.getIdFromURL('https://www.youtube.com/watch?v=NyK5q0AvI0U')).toEqual('NyK5q0AvI0U');
    expect("Big world".indexOf("world") > -1).toEqual(true);
  });
});
