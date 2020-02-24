const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const hbs = require('hbs');
const db = require('./bootstrap/db');
const users = require('./handlers/users');
const auth = require('./handlers/auth');
var jwt = require('jsonwebtoken');
const dashboard = require('./handlers/dashboard');


db.initDB();

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use((req,res,next) => {
    let whitelist = [
        '/',
        '/register'
    ];
    if(!whitelist.includes(req.path)){
        if(req.cookies.jwt){
            jwt.verify(req.cookies.jwt,auth.tokenKey, (err,payload) => {
                if(err){
                    return res.status(401).send('Unathourized');
                }
                return next();
            })
        } else {
            return res.status(401).send('Unauthorized')
        }
    }   else {
            return next();
    }

});

app.set('view engine', 'hbs');
<<<<<<< HEAD
=======
app.use(express.static('public'));
>>>>>>> e1179dc0284965c5b4a06cf158e3196ec456480a


// routes

app.get('/', auth.viewLogin);
app.post('/', auth.apiLogin);

app.get('/register', auth.viewRegister);
app.post('/register', auth.apiRegister);
app.get('/dashboard', dashboard.viewDashboard);

app.listen(8080, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('started on port 8080');
})
