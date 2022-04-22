const express = require('express')
const app = express()
const port = 3000 // puerto para el server

app.get('/', (req, res)=>{
    res.send("hola a todos ")
})

app.listen(port,()=>{
    console.log("server listo calisto¡");
})