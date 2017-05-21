var app = angular.module('PsytestApp');

const fs = require('fs');
const path = require('path')
const url = require('url')

const REPORTS_DIR = url.format({ pathname: path.join('app', 'internal', 'reports_dir.config') });

app.service('appSettings', function($mdToast) {
  this.setReportsDirpath = function(dirpath) {
    fs.writeFileSync(REPORTS_DIR, dirpath);
  };

  this.getReportsDirpath = function() {
    content = fs.readFileSync(REPORTS_DIR, 'utf8');
    if (content) {
      return {label: 'Carpeta de reportes', reports_dir: content.replace("\n", "")};
    } else {
      return {label: '¿Dónde se guardarán los reportes?', reports_dir: ""};
    }
  };  
});
