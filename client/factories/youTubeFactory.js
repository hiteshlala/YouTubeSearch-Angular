angular.module('recastly')
.factory('youTube', function() {


  var searchYouTube = function(query, callback) {

    var options = {
      query: query || 'the dizi',
      max: 5,
      key: YOUTUBE_API_KEY
    };

    
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

  return {
    search: searchYouTube
  };

  
});

