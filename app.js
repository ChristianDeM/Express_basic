const express = require('express')
const app = express()
const port = 3000 // puerto para el server

app.get('/', (req, res)=>{
    res.send("hola a todos ")
})

app.get('/launchx', (req, res)=>{
    res.send("hola ahora estas en launchx")
})
app.get('/node', (req, res)=>{
   const explorer1 ={ id:1, name:"explorer1"}
   const explorer2 ={ id:2, name:"explorer2"}
   const explorer3 ={ id:3, name:"explorer3"}
   res.send([explorer1,explorer2,explorer3])
})

app.get('/explorer/:eplorer', (req, res)=>{
    console.log(req.params);
    res.send(req.params)
 })

app.listen(port,()=>{
    console.log("server listo calisto¡");
})