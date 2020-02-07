const express = require('express'); //callin express librarys
const bodyParser=require('body-parser');

var app = express(); //creatin express application
app.use(bodyParser.urlencoded({extended:false})); // reading body data  from post request

//app.get('/',(req,res)=>{
   // res.send('ok');
//}); //get method //req-request res-response

//app.get('/ime',(req,res)=>{
 //   res.send('pero');
//});

//app.get('/greetings/:ime',(req,res)=>{
 //   res.send(req.params.ime);
//});
app.get('/calc/:op/:a/:b',(req,res)=>{
    let o=0
    switch(req.params.op){
            case 'add':
                o = Number(req.params.a) + Number(req.params.b);
                break;
            case 'sub':
                o = Number(req.params.a) - Number(req.params.b);
                break;
            case 'mul':
                o = Number(req.params.a) * Number(req.params.b);
                break;
            case 'div':
                o = Number(req.params.a) / Number(req.params.b);
                break;
    }
    res.send(' ' + o);

});
//app.get('/calc/sub/10/4')
//app.get('/calc/mul/2/7')
//app.get('/calc/div/6/3')


app.post('/values',(req,res)=>{
    res.send('response: ${req.body.age}'+' ${req.body.ime}');
});

app.post('/calc',(req,res)=>{
    let o=0
    switch(req.body.op){
            case 'add':
                o = Number(req.body.a) + Number(req.body.b);
                break;
            case 'sub':
                o = Number(req.body.a) - Number(req.body.b);
                break;
            case 'mul':
                o = Number(req.body.a) * Number(req.body.b);
                break;
            case 'div':
                o = Number(req.body.a) / Number(req.body.b);
                break;
    }
    res.send(' ' + o);
    // only change params to body ---params to get data from url ---body to get data from web/bodys

});
app.listen(8080);