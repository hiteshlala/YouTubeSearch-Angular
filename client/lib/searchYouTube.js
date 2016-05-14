var searchYouTube = function(options, callback) {
  
  $.ajax({
    url:'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      type: 'video',
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      key: options.key,
      videoEmbeddable: 'true'
    }

  })
  .done(function(videos) {
    callback(videos);
  })
  .fail(function(error) {
    console.error('from $ajax.fail',error);
  });

};

window.searchYouTube = searchYouTube;
