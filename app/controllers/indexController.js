var app = angular.module('PsytestApp');

const dialog = require('electron').remote.dialog;
const os = require('os');

// Controller for 'index.html'
app.controller('IndexController', ['$scope', '$location', '$mdToast', '$mdSidenav', 'pbqTest', 'bdi_iiTest', 'icons', 'appSettings',
function($scope, $location, $mdToast, $mdSidenav, pbqTest, bdi_ii, icons, appSettings) {
  $scope.ttIndex = true;

  $scope.icons = icons;
  $scope.tests = [pbqTest, bdi_ii];
  $scope.settings = appSettings.getReportsDirpath();

  $scope.go = function(route_path) {
    $location.path(route_path);
  };

  $scope.toggleSettingsMenu = function() {
    $mdSidenav('left').toggle();
  };

  $scope.toggleListMenu = function() {
    $mdSidenav('right').toggle();
  };

  $scope.openFileChooser = function() {
    console.log('current');
    console.log($scope.settings.reports_dir);
    dialog.showOpenDialog(
      {
        title: "Seleccione la carpeta donde se guardarán los reportes",
        defaultPath: ($scope.settings.reports_dir != "") ? $scope.settings.reports_dir : os.homedir(),
        properties: ['openDirectory']
      },
      function(files) {
        if (files) {
          // TODO: If 'files' exist, it must be saved by 'setReportsDirpath(files)' from appSettings
          $scope.settings.label = 'Carpeta de reportes';
          $scope.settings.reports_dir = files.pop();
          // TODO: This must return a confirm message from 'appSettings' before show toast.
          $mdToast.showSimple($scope.settings.label + ': ' + $scope.settings.reports_dir);
          console.log('new');
          console.log($scope.settings.reports_dir);
        }
    });
  };
}]);
