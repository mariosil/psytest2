const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
// const devtron = require('devtron');

const path = require('path')
const url = require('url')

var mainWindow = null;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  init_url = url.format({
    pathname: path.join(__dirname, 'app', 'views', 'index.html'), 
    protocol: 'file:',
    slashes: true
  });

  mainWindow = new BrowserWindow({name: "Psytest"});

  mainWindow.webContents.openDevTools();
  // devtron.install();

  mainWindow.setMenu(null);
  mainWindow.loadURL(init_url);
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
