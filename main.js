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
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Mi primera ventana",
        center: true,
        maximizable: false,
        minimizable: false,
        resizable: false,

    })

    //evento move
    win.on('move', () => {
        const position = win.getPosition() //devueve la posicion de la vetana
        console.log(`La posición es ${position}`);
    })

    win.on('closed', () => {
        win = null
        app.quit()
    })
})

//app.quit()