const express = require('express');
const bodyParser = require('body-parser');
const db = require('./bootstrap/db');
const handlers = require('./handlers');

db.initDB();


let api = express();

api.use(bodyParser.json());



api.get('/movies', handlers.allmovies);
api.get('/movies/:id',handlers.findmovie);
api.post('/movies', handlers.createmovies);
api.put('/movies/:id', handlers.updmovie);
api.delete('/movies/:id', handlers.delmovie);

api.listen(8080, (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('listening on port 8080');
    return;
})