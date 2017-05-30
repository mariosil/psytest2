var app = angular.module('PsytestApp');

app.controller('ListController', ['$scope', '$mdSidenav', '$mdDialog', 'pbqTest', 'bdi_iiTest',
function($scope, $mdSidenav, $mdDialog, pbqTest, bdi_iiTest) {
  $scope.tests = [pbqTest, bdi_iiTest];

  $scope.toggleListMenu = function() {
    $mdSidenav('app_test_list').toggle();
    $scope.shouldBlockByBackdrop = $mdSidenav('app_test_list').isOpen();
  };

  $scope.showTestApplyDialog = function(ev, test) {
    $mdDialog.show({
      controller: 'TestApplyDialogController',
      templateUrl: '../views/home/dialogs/test_apply_dialog.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      escapeToClose: true,
      locals: {
        selectedTest: test,
        otherTests: $scope.tests
      }
    })
    .then(function(initData) {
      console.log(initData);
    }, function() {
      console.log('canceled');
    });
  };

  $scope.$on('toggleListMenu', function(event, arg) {
    $scope.toggleListMenu();
  });

}]);
