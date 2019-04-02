const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Oi é nois de novo");
})

app.get("/sobre/:nome",function(req,res){
     //res.send(req.params)
     res.send("<h1>Ola " + req.params.nome + "</h1>")
})

app.listen(8085, function(){
   console.log("Servidor rodando na porta localhost:8085")
});