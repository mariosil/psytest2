var app = angular.module('PsytestApp');

app.service('testsService', ['$location', function($location) {
  var test = null;
  var client = null;

  this.goToTest = function(selectedTest, clientData) {
    test = selectedTest;
    client = clientData;

    switch (test.test_name) {
      case "BDI-II":
      $location.path("/test/bdi_ii");
      break;
      case "PBQ":
      // TODO: Change to right route when PQB test view be ready.
      $location.path("/");
      break;
      default:
      // TODO: Create a 'Test Not Found' page or something like that.
      $location.path("/");
    }
  };

  this.getTest = function() {
    return test;
  }

  this.getClient = function() {
    return client;
  }
}]);
