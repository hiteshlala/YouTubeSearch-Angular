angular.module('recastly')
.directive('videoListEntry', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/VideoListEntry.html'
  };
});