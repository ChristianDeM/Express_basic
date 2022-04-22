const express = require('express')
const app = express()
const port = 3000 // puerto para el server

app.get('/', (req, res)=>{
    res.send("hola a todos ")
})

app.get('/launchx', (req, res)=>{
    res.send("hola ahora estas en launchx")
})

app.listen(port,()=>{
    console.log("server listo calisto¡");
})