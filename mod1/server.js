const http = require('http')

http.createServer(function(req,res){
       res.end("Olá")
}).listen(8085);

console.log("servidor rodando!")