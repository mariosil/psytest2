var app = angular.module('PsytestApp');

const dialog = require('electron').remote.dialog;
const os = require('os');

app.controller('SettingsController', ['$scope', '$mdSidenav', 'appSettings', 'toastService',
function($scope, $mdSidenav, appSettings, toastService) {
  $scope.settings = appSettings.getReportsDirpath();

  $scope.toggleSettingsMenu = function() {
    $mdSidenav('app_settings').toggle();
    $scope.shouldBlockByBackdrop = $mdSidenav('app_settings').isOpen();
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
          toastService.showSucces($scope.settings.label + ': ' + $scope.settings.reports_dir);
        } else {
          toastService.showInfo("Sin cambios");
        }
    });
  };

  $scope.$on('toggleSettingsMenu', function(event, arg) {
    $scope.toggleSettingsMenu();
  });

}]);
