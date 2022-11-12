const { app, BrowserWindow, Menu } = require('electron');
const { default: installExtension, REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

const isDev = process.env.NODE_ENV !== 'production';

let win

const createWindow = async () => {
    win = new BrowserWindow({
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            devTools: isDev,
        }
    });
    win.maximize();
    const mainMenu = Menu.buildFromTemplate(templateMainMenu);
    Menu.setApplicationMenu(mainMenu);
    win.loadURL('http:localhost:3000');
    if (isDev) {
        win.webContents.once("dom-ready", async () => {
            await installExtension([REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS], true)
                .then((name) => console.log(`Added Extension:  ${name}`))
                .catch((err) => console.log("An error occurred: ", err))
                .finally(() => {
                    win.webContents.openDevTools();
                });
        });
    }
    win.on('closed', () => app.quit());
}

app.whenReady().then(createWindow);

/* Template Main Menu */
let templateMainMenu = [];

if (isDev) {
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
