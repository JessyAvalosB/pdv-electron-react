const { app, BrowserWindow, Menu, ipcMain } = require('electron');

const createWindow = () => {
    let win = new BrowserWindow({
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            // nodeIntegrationInWorker: true,
            // enableRemoteModule: true
        }
    });
    win.maximize();
    const mainMenu = Menu.buildFromTemplate(templateMainMenu);
    Menu.setApplicationMenu(mainMenu);
    win.loadURL('http:localhost:3000');
    win.on('closed', () => app.quit());
}

app.whenReady().then(createWindow);

/* Template Main Menu */
let templateMainMenu = [];

if (process.env.NODE_ENV !== 'production') {
    templateMainMenu.push({
        label: 'DevTools',
        submenu: [
            {
                label: 'Show/Hide Dev Tools',
                accelerator: process.platform === 'darwin' ? 'command+D' : 'Ctrl+D',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload',
            }
        ]
    });
}
