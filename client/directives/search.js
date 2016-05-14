angular.module('recastly')
.directive('search', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/Search.html'
  };
});