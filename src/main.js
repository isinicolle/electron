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
        title: "Mi primera ventana",
        center: true,
        show: false,
        minizable: false

    })

    //once ejecuta una vez
    win.once('ready-to-show', () => {
        win.show()
    })
/*
    //evento move
    win.on('move', () => {
        const position = win.getPosition() //devueve la posicion de la vetana
        console.log(`La posición es ${position}`);
    })
*/
    win.on('closed', () => {
        win = null
        app.quit()
    })

    //win.loadURL(`https://isinicolle.github.io/`)
    win.loadURL(`file://${__dirname}/index.html`)
})

//app.quit()