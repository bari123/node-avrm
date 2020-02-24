const mongoose = require('mongoose');
const Movie = mongoose.model(
    'movies',
    {
            title: String,
            release_date: Date,
            director: String,
            actors: [String],
            genre: [String]
        
    },
    'movies'
);



const readAll = () =>{
    return new Promise((succes,fail) =>{
        Movie.find({}, (err,data) => {
            if(err){
                return fail(err);
            }
            console.log(data);
        });
    })
}

const createNew = (data) => {
    return new Promise((succes,fail) =>{
        let p = new Movie(data);
        p.save((err) =>{
            if(err){
            return fail(err);
            }
            return succes();
        });
    });

};

const remove = (id) =>{
    return new Promise((succes,fail) =>{
        Movie.deleteOne({_id: id},(err) =>{
            if(err){
                return fail(err);
            }
            return succes();
        });
});
}

const update = (id,data) => {
    return new Promise((succes,fail) =>{
        Movie.update({_id:id},data,(err) =>{
            if(err){
                return fail(err);
            }
            return succes();
        });

    });
}

const getByid = (id) => {
    return new Promise((succes,fail) => {
        Movie.findOne({_id:id},(err, data) =>{
            if(err){
                return fail(err);
            }
            return succes(data);
        })
    })
}



module.exports = {
    readAll,
    createNew,
    remove,
    update,
    getByid
}