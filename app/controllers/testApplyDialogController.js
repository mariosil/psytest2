var app = angular.module('PsytestApp');

app.controller('TestApplyDialogController', ['$scope', '$mdDialog', 'selectedTest', 'otherTests',
function($scope, $mdDialog, selectedTest, otherTests) {
  $scope.selectedTest = selectedTest;

  $scope.client = {
    names: "",
    lastName1: "",
    lastName2: "",
    age: null
  };

  $scope.validations = {
    namePattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    nameRequiredError: "Se requiere nombre",
    namePatternError: "El nombre proporcionado no es válido",
    lastNameRequiredError: "Se requiere al menos el primer apellido",
    lastNamePatternError: "El apellido proporcionado no es válido",

    ageRequiredError: "Se requiere la edad",
    ageMinError: "La edad mínima es de 5 años",
    ageMaxError: "La edad máxima es de 120 años",
  };

  $scope.close = function() {
    $mdDialog.cancel();
  };

  $scope.begin = function(client) {
    initData = {
      client: client,
      selectedTest: $scope.selectedTest
    };
    $mdDialog.hide(initData);
  };

  $scope.changeSelectedTest = function(test) {
    $scope.selectedTest = test;
  };

  $scope.openOtherTestMenu = function($mdMenu, ev) {
    selectedTestIndex = otherTests.indexOf($scope.selectedTest);
    $scope.otherTests = otherTests.slice();
    $scope.otherTests.splice(selectedTestIndex, 1);
    $mdMenu.open(ev);
  };

}]);
