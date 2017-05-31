var app = angular.module('PsytestApp');

app.controller('ListController', ['$scope', '$mdSidenav', '$mdDialog', 'toast', 'pbqTest', 'bdi_iiTest',
function($scope, $mdSidenav, $mdDialog, toast, pbqTest, bdi_iiTest) {
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
      locals: {
        selectedTest: test,
        otherTests: $scope.tests
      }
    })
    .then(function(initData) {
        initData.client.names = initData.client.names.replace(/\b\w/g, function(firstChar) { return firstChar.toUpperCase() });
        initData.client.lastName1 = initData.client.lastName1.replace(/\b\w/g, function(firstChar) { return firstChar.toUpperCase() });
        initData.client.lastName2 = initData.client.lastName2.replace(/\b\w/g, function(firstChar) { return firstChar.toUpperCase() });
        // TODO: go to test page
    }, function(canceledTest) {
      toast.showInfo("Aplicación de prueba " + canceledTest.test_name + " cancelada");
    });
  };

  $scope.$on('toggleListMenu', function(event, arg) {
    $scope.toggleListMenu();
  });

}]);
