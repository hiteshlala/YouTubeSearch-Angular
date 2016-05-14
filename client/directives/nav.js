angular.module('recastly')
.directive('navBar', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/Nav.html'
  };
});
