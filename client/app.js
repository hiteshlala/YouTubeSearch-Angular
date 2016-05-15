angular.module('recastly', [])
.controller('recastly.data', function($scope) {
  
  // this function is defined separately and initializes
  //   the page with data and also loads a video in the player
  searchYouTube(
    {
      query: 'the dizi',
      max: 5,
      key: YOUTUBE_API_KEY
    },
    function(data) {
      $scope.videos = data.items;
      $scope.currentVideo = 0;
      $scope.getUrl = 'https://www.youtube.com/embed/'+ $scope.videos[$scope.currentVideo].id.videoId +'?autoplay=1';
    }
  );

  $scope.playThis = function(index) {
    $scope.currentVideo = index;
    $scope.getUrl = 'https://www.youtube.com/embed/'+ $scope.videos[$scope.currentVideo].id.videoId +'?autoplay=1';
  };

  $scope.queryYouTube = function(searchQuery) {
    searchYouTube(
      {
        query: searchQuery,
        max: 5,
        key: YOUTUBE_API_KEY
      },
      function(data) {
        $scope.videos = data.items;
      }
    );
  };
  $scope.query = '';

  $scope.getNewList = function(key) {
    if(key.which === 13) {
      $scope.queryYouTube($scope.query);
      $scope.query = '';
    }
  };
})
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from outer templates domain.
    'https://www.youtube.com/**'
  ]);
});;