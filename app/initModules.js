// This file must be LOADED AT FIRST.
// It was necessary to create this module in a separate script in order to made it
// available for factories 'bdi_iiTestFactory' and 'pbqTestFactory' which contains
// the data for psycometric tests.

var app = angular.module('PsytestApp', ['ngMaterial', 'ngRoute', 'ngMessages']);

// Configuring application stuff
app.config(function($mdThemingProvider, $routeProvider) {

  // Configuring Color Theme Intentions
  $mdThemingProvider.theme('default')
  .primaryPalette('teal')
  .accentPalette('light-green')
  .warnPalette('orange');

  // Configuring app routes
  $routeProvider.when("/", {
    templateUrl: "home/home.html"
  })
  .when("/test/bdi_ii", {
    templateUrl: "tests/bdi_ii_test_view.html",
    controller: "BDI_IITestController"
  })
  .when("/test/thanks", {
    templateUrl: "tests/thanks_after_test.html",
    controller: "IndexController"
  });
});
