var app = angular.module('PsytestApp');

// Controller for 'index.html'
app.controller('IndexController', ['$scope', '$location','pbqTest', 'bdi_iiTest', 'icons',
function($scope, $location, pbqTest, bdi_ii, icons) {
  $scope.icons = icons;
  $scope.tests = [pbqTest, bdi_ii];
  $scope.settings = {
    label: '¿Dónde se guardarán los reportes?',
    reports_dir: ''
  };

  $scope.go = function(path) {
    $location.path(path);
  };
}]);
