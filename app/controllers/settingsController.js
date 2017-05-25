var app = angular.module('PsytestApp');

const dialog = require('electron').remote.dialog;
const os = require('os');

app.controller('SettingsController', ['$scope', 'appSettings', 'toast',
function($scope, appSettings, toast) {
  $scope.settings = appSettings.getReportsDirpath();
  
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
          toast.showInfo("Sin cambios");
        }
    });
  };

}]);
