var app = angular.module('PsytestApp');

app.controller('IndexController', ['$scope', '$location',
function($scope, $location) {
  $scope.go = function(route_path) {
    $location.path(route_path);
  };
}]);
