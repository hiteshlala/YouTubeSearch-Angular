angular.module('recastly', [])

.controller('recastly.data', function($scope, youTube) {
  
  // Initialize video list and video player with 'the dizi' query string
  youTube.search(
    'the dizi',
    function(data) {
      $scope.videos = data.items;
      $scope.playThis(0);
    }
  );

  $scope.playThis = function(index) {
    $scope.currentVideo = index;
    $scope.getUrl = 'https://www.youtube.com/embed/'+
      $scope.videos[$scope.currentVideo].id.videoId +'?autoplay=1';
  };

  $scope.queryYouTube = function(searchQuery) {
    youTube.search(
      searchQuery,
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
});