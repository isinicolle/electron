'use strict'

// El objeto app permitirá controlar eventos
const { app, BrowserWindow } = require('electron')

//console.dir(app)
// Imprimirá en consola saliendo después de quitar
app.on('before-quit', () => {
    console.log("saliendo..");
})

// Construye nuestra primera ventana
app.on('ready', () => {
    let win = new BrowserWindow()

    win.on('closed', () => {
        win = null
        app.quit()
    })
})

//app.quit()