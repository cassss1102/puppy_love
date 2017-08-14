// const app = require('electron').app
const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  const browser = new BrowserWindow({});
  const file = 'file://' + __dirname + '/index.html';
  browser.loadURL(file);
});
