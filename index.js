
const mongoose = require('mongoose')
const config = require('./config')
const app = require('./app')

mongoose.connect(config.db,(err,res)=>{
    if(err){
        return console.log("Hubo un error al inicializar: " + err)
    }
    console.log("Conexion establecida")
    app.listen(config.port,()=>{
        console.log("Api ejecutandose desde: " + config.port)
    });
})