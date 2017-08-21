var app = angular.module('PsytestApp');

app.controller('HomeController', ['$scope', '$rootScope', '$mdSidenav', 'appSettings',
function($scope, $rootScope, $mdSidenav, appSettings) {
  $scope.canSeeTestList = appSettings.reportsDirpathIsSet;

  $scope.toggleSettingsMenu = function() {
    $rootScope.$broadcast('toggleSettingsMenu', true);
  };

  $scope.toggleListMenu = function() {
    $rootScope.$broadcast('toggleListMenu', true);
  };
}]);
