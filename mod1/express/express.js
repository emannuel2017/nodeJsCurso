const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Oi");
})

app.get("/sobre",function(req,res){
     res.send("Sobre")
})



app.listen(8085, function(){
   console.log("Servidor rodando na porta localhost:8085")
});