angular.module('recastly')
.directive('application', function(youTube) {
  return {
    restrict: 'E',
    replace: true,
    controller: function($scope) {
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
    },
    templateUrl: 'templates/App.html'
  };
});