var app = angular.module('PsytestApp');

app.controller('BDI_IITestController', ['$scope', '$location', '$mdDialog', 'testsService',
function($scope, $location, $mdDialog, testsService) {
  $scope.client = testsService.getClient();
  $scope.test = testsService.getTest();
  $scope.selectedIndex = 0;
  $scope.canFinish = false;
  $scope.clientAnswers = [];

  $scope.currentEntryClientAnswer = {
    entry_name: $scope.test.entry_groups[$scope.selectedIndex].entries[0].entry_name,
    answered: null
  }

  $scope.nextTab = function() {
    if ($scope.selectedIndex < $scope.test.entry_groups.length) {
      let currentAnswer = JSON.parse(JSON.stringify($scope.currentEntryClientAnswer));
      $scope.clientAnswers.push(currentAnswer);
      $scope.selectedIndex += 1;
      $scope.currentEntryClientAnswer.entry_name = $scope.test.entry_groups[$scope.selectedIndex].entries[0].entry_name;
      $scope.currentEntryClientAnswer.answered = null;
    }

    if ($scope.selectedIndex == $scope.test.entry_groups.length - 1) {
      $scope.canFinish = true;
    }
  };

  $scope.finishTest = function() {
    let currentAnswer = JSON.parse(JSON.stringify($scope.currentEntryClientAnswer));
    $scope.clientAnswers.push(currentAnswer);
    $location.path("/test/thanks");
    // TODO: Save answers in some file.
  };

  $scope.shouldBeDisabled = function(entry_group){
    return $scope.test.entry_groups.indexOf(entry_group) != $scope.selectedIndex;
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
