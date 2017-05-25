var app = angular.module('PsytestApp');

app.controller('IndexController', ['$scope', '$location', '$mdSidenav', 'pbqTest', 'bdi_iiTest',
function($scope, $location, $mdSidenav, pbqTest, bdi_iiTest) {
  $scope.tests = [pbqTest, bdi_iiTest];

  $scope.go = function(route_path) {
    $location.path(route_path);
  };

  $scope.toggleSettingsMenu = function() {
    $mdSidenav('left').toggle();
    $scope.shouldBlockByBackdrop = $mdSidenav('left').isOpen();
  };

  $scope.toggleListMenu = function() {
    $mdSidenav('right').toggle();
    $scope.shouldBlockByBackdrop = $mdSidenav('right').isOpen();
  };

}]);
