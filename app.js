
const express = require("express")
const bodyParser = require("body-parser")
const api = require('./routes')
const app = express()

app.use(bodyParser.json());// para peticiones con formato application/json
app.use(bodyParser.urlencoded({extended:true}));// define con que algoritmo va a hacer el parsing la libreria,cuando es false no puede hacer el parsing de arreglos

app.use("/personas",api);

app.get("/",function (req,res) {
    res.status(200).send("Todo Correcto")
})
module.exports = app;