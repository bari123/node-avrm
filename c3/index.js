const express = require('express'); //callin express librarys
const bodyParser=require('body-parser');
const handlers = require('./handlers');
var app = express(); //creatin express application
app.use(bodyParser.urlencoded({extended:false})); // reading body data  from post request

app.get('/',handlers.index);
app.get('/',handlers.ime);
app.get('/greetings/:ime',handlers.greeting);
app.get('/calc/:op/:a/:b',handlers.calc);
app.post('/values',handlers.values);
    // det shp -get -post imenik/iminja.txt
app.listen(8080);