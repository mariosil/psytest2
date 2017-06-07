var app = angular.module('PsytestApp');

app.controller('ListController', ['$scope', '$mdSidenav', '$mdDialog', 'toastService', 'pbqTest', 'bdi_iiTest', 'testsService',
function($scope, $mdSidenav, $mdDialog, toastService, pbqTest, bdi_iiTest, testsService) {
  $scope.tests = [pbqTest, bdi_iiTest];

  $scope.toggleListMenu = function() {
    // On close callback to handle close, backdrop click or escape key pressed
    // Callback happens BEFORE the close action occurs.
    $mdSidenav('app_test_list').onClose(function () {
      $scope.shouldBlockByBackdrop = false;
    });    
    $mdSidenav('app_test_list').toggle();
    $scope.shouldBlockByBackdrop = $mdSidenav('app_test_list').isOpen();
  };

  $scope.showTestApplyDialog = function(ev, test) {
    $mdDialog.show({
      controller: 'TestApplyDialogController',
      templateUrl: '../views/home/dialogs/test_apply_dialog.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      locals: {
        selectedTest: test,
        otherTests: $scope.tests
      }
    })
    .then(function(initData) {
        initData.client.names = initData.client.names.replace(/\b\w/g, function(firstChar) { return firstChar.toUpperCase() });
        initData.client.lastName1 = initData.client.lastName1.replace(/\b\w/g, function(firstChar) { return firstChar.toUpperCase() });
        initData.client.lastName2 = initData.client.lastName2.replace(/\b\w/g, function(firstChar) { return firstChar.toUpperCase() });
        testsService.goToTest(initData.selectedTest, initData.client);
    }, function(canceledTest) {
      toastService.showInfo("Aplicación de prueba " + canceledTest.test_name + " cancelada");
    });
  };

  $scope.$on('toggleListMenu', function(event, arg) {
    $scope.toggleListMenu();
  });

}]);
