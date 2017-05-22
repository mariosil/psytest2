var app = angular.module('PsytestApp');

var getTemplate = function(textual_name, icon_color, message) {
  return '<md-toast>' +
    '<md-content class="md-toast-content" layout layout-margin>' +
      '<i class="material-icons" style="color: ' + icon_color + '">' + textual_name + '</i>' +
      '<span>' + message + '</span>' +
    '</md-content>' +
  '</md-toast>';
};

app.service('toast', ['$mdToast', function($mdToast) {
  this.showSucces = function(message) {
    $mdToast.show($mdToast.build().template(getTemplate('check_circle', 'limegreen', message)));
  };

  this.showInfo = function(message) {
    $mdToast.show($mdToast.build().template(getTemplate('info', 'dodgerblue', message)));
  };

  this.showWarning = function(message) {
    $mdToast.show($mdToast.build().template(getTemplate('warning', 'orange', message)));
  };

  this.showError = function(message) {
    $mdToast.show($mdToast.build().template(getTemplate('error', 'orangered', message)));
  };
}]);
