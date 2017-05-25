var app = angular.module('PsytestApp');

app.controller('ListController', ['$scope', '$mdSidenav', 'pbqTest', 'bdi_iiTest',
function($scope, $mdSidenav, pbqTest, bdi_iiTest) {
  $scope.tests = [pbqTest, bdi_iiTest];

  $scope.toggleListMenu = function() {
    $mdSidenav('app_test_list').toggle();
    $scope.shouldBlockByBackdrop = $mdSidenav('app_test_list').isOpen();
  };

  $scope.openNewTestForm = function(test) {
    console.log('New form should open here');
    console.log(test.test_name);
    console.log(test.instructions);
  };

  $scope.$on('toggleListMenu', function(event, arg) {
    $scope.toggleListMenu();
  });

}]);
