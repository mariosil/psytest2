var app = angular.module('PsytestApp');

const dialog = require('electron').remote.dialog;
const os = require('os');

// Controller for 'index.html'
app.controller('IndexController', ['$scope', '$location', '$mdSidenav', 'pbqTest', 'bdi_iiTest', 'appSettings', 'toast',
function($scope, $location, $mdSidenav, pbqTest, bdi_ii, appSettings, toast) {
  $scope.tests = [pbqTest, bdi_ii];
  $scope.settings = appSettings.getReportsDirpath();

  $scope.go = function(route_path) {
    $location.path(route_path);
  };

  $scope.toggleSettingsMenu = function() {
    $mdSidenav('left').toggle();
    $scope.shouldBlockByBackdrop = $mdSidenav('left').isOpen();
  };

  $scope.toggleListMenu = function() {
    $mdSidenav('right').toggle();
    $scope.shouldBlockByBackdrop = $mdSidenav('right').isOpen();
  };

  $scope.openFileChooser = function() {
    $scope.isOpenFileChooser = true;
    dialog.showOpenDialog(
      {
        title: "Seleccione la carpeta donde se guardarán los reportes",
        defaultPath: ($scope.settings.reports_dir != "") ? $scope.settings.reports_dir : os.homedir(),
        properties: ['openDirectory']
      },
      function(files) {
        $scope.isOpenFileChooser = false;
        if (files) {
          appSettings.setReportsDirpath(files.pop());
          $scope.settings = appSettings.getReportsDirpath();
          toast.showSucces($scope.settings.label + ': ' + $scope.settings.reports_dir);
        } else {
          // This forces 'Folder' button to refresh disable="true/false" property.
          toast.showInfo("Sin cambios");
        }
    });
  };
}]);
