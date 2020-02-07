const express = require('express'); //callin express librarys

var app = express(); //creatin express application

app.get('/',(req,res)=>{
    res.send('ok');
}); //get method //req-request res-response

app.listen(8080);