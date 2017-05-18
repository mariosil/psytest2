var app = angular.module('PsytestApp');

const dialog = require('electron').remote.dialog;
const os = require('os');

// Controller for 'index.html'
app.controller('IndexController', ['$scope', '$location', '$mdToast', 'pbqTest', 'bdi_iiTest', 'icons',
function($scope, $location, $mdToast, pbqTest, bdi_ii, icons) {
  $scope.icons = icons;
  $scope.tests = [pbqTest, bdi_ii];
  // TODO: Create another controller which read an external file looking for reports dir path and set '$scope.settings' to a method calling.
  $scope.settings = {
    label: '¿Dónde se guardarán los reportes?',
    reports_dir: ''
  };

  $scope.go = function(path) {
    $location.path(path);
  };

  $scope.openFileChooser = function() {
    dialog.showOpenDialog(
      {
        title: "Seleccione la carpeta donde se guardarán los reportes",
        defaultPath: os.homedir(),
        properties: ['openDirectory']
      },
      function(files) {
        if(files){
          $scope.settings.label = 'Carpeta de reportes';
          $scope.settings.reports_dir = files;
          $mdToast.showSimple($scope.settings.label + ': ' + $scope.settings.reports_dir);
        }
      });
  };
}]);
