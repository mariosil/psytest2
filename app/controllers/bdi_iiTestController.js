var app = angular.module('PsytestApp');

app.controller('BDI_IITestController', ['$scope', '$mdDialog', 'testsService',
function($scope, $mdDialog, testsService) {
  $scope.client = testsService.getClient();
  $scope.test = testsService.getTest();
  $scope.selectedIndex = 0;
  $scope.currentEntryClientAnswer = {
    entry_name: $scope.test.entry_groups[$scope.selectedIndex].entries[0].entry_name,
    answered: null
  }

  $scope.showInstructions = function(ev) {
    $mdDialog.show(
     $mdDialog.alert()
       .parent(angular.element(document.body))
       .clickOutsideToClose(true)
       .title('Instrucciones')
       .textContent($scope.test.instructions)
       .ariaLabel('Alert Dialog Instructions')
       .ok('Aceptar')
       .targetEvent(ev)
   );
  }
}]);
