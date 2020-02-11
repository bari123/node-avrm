const mongoose = require('mongoose');
const Produkt = mongoose.model(
    'produkti',
    {
        ime:String,
        proizvoditel:String,
        cena: Number ,
        tezina: Number,
        parcinja: Number
    },
    'produkti'
);



const readAll = () =>{
    return new Promise((succes,fail) =>{
        Produkt.find({}, (err,data) => {
            if(err){
                return fail(err);
            }
            console.log(data);
        });
    })
}

const createNew = (data) => {
    return new Promise((succes,fail) =>{
        let p = new Produkt(data);
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
        Produkt.remove({_id: id},(err) =>{
            if(err){
                return fail(err);
            }
            return succes();
        });
});
}

const update = (id,data) => {
    return new Promise((succes,fail) =>{
        Produkt.update({_id:id},data,(err) =>{
            if(err){
                return fail(err);
            }
            return succes();
        });

    });
}

module.exports = {
    readAll,
    createNew,
    remove,
    update
}