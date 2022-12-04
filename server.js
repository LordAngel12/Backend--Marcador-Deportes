const express = require('express') 
const mysql = require('mysql') 
const myconn = require('express-myconnection') 
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())



app.set('port',9000)

const dbOptions = {
    host:'localhost',
    port:'3306',
    user:'root',
    password:'password',
    database:'deportes'
}

//middleware ----- procesos en el intermedio entre una petición y una respuesta
app.use(myconn(mysql,dbOptions,'single'))
app.use(express.json()) //formato de entrega y recepción

// routes -----
app.get('/',(req,res)=>{
    res.send('Welcome to my APP2')
})

// se usa use, porque la petición esta creada en routes
app.use('/api/',routes)



app.listen(app.get('port'),()=>{
    console.log(`server running on port ${app.get('port')}`);
})