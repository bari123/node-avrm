const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const db = require('./bootstrap/db');
const users = require('./handlers/users');
const auth = require('./handlers/auth');

db.initDB();

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');
app.use(express.static('public'))

// routes

app.get('/login', auth.viewLogin);
app.post('/login', auth.apiLogin);

app.get('/register', auth.viewRegister);
app.post('/register', auth.apiRegister);

//app.get('/users', auth.viewUsersGetAll);

app.listen(8080, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('started on port 8080');
})