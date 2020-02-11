
const db = require('./bootsrap/db');
const produkt = require('./models/produkt');

db.initDB();

produkt.createNew({
        "ime" : "milka so marshmellow",
        "proizvoditel" : "Mondelez",
        "cena" : 80,
        "tezina" : 100,
        "parcinja" : 1,
        "__v" : 0
    })
    .then(() =>{
        return produkt.update("5e42cb6e8125581514567abe"), {ime: "milka so leshnici"};
    })
    .then(() =>{
        return produkt.remove("5e42b2517398be20882d3a2a");
    })
    .then(data =>{
      return  produkt.readAll();
    })
    .then (data =>{
        console.log(data);
    })
    .catch(err =>{
        console.log(err);
    })