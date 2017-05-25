var app = angular.module('PsytestApp');

app.controller('HomeController', ['$scope', '$rootScope', '$mdSidenav',
function($scope, $rootScope, $mdSidenav) {
  $scope.toggleSettingsMenu = function() {
    $rootScope.$broadcast('toggleSettingsMenu', true);
  };

  $scope.toggleListMenu = function() {
    $rootScope.$broadcast('toggleListMenu', true);
  };
}]);
