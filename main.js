const { app, BrowserWindow, Menu } = require("electron");

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 1100,
  });
  window.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});

const template = [];

const customMenu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(customMenu);
