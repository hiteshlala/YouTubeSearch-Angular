angular.module('recastly')
.directive('videoList', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/VideoList.html'
  };
});