angular.module('recastly')
.directive('videoPlayer', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/VideoPlayer.html'
  };
});