const movie = require('./models/movie')

const createmovies = (req,res)=>{
    movie.createNew()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        console.log(err);
    }) 
    
}

const updmovie = (req,res) =>{
    movie.update()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        console.log(err);
    })
    }

const findmovie = (req,res) =>{
    movie.getByid()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        console.log(err);
    }) 
    }

const delmovie = (req, res) =>{
    movie.remove()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        console.log(err);
    }) 
    }



const allmovies = (req,res)=>{
    movie.readAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        console.log(err);
        exports.status(500).send('error');
    }) 
    
}

module.exports = {
    allmovies,
    createmovies,
    findmovie,
    delmovie,
    updmovie
}