angular.module('recastly')
.directive('application', function() {
  return {
    restrict: 'E',
    replace: true,
    controller: 'recastly.data',
    templateUrl: 'templates/App.html'
  };
});