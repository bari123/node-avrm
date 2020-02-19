const mongoose = require('mongoose');
const User = mongoose.model(
    'users',
    {
        first_name: String,
        last_name: String,
        email: String,
        password: String,
    },
    'users'
);



const readAll = () =>{
    return new Promise((succes,fail) =>{
        User.find({}, (err,data) => {
            if(err){
                return fail(err);
            }
            console.log(data);
        });
    })
}

const createNew = (data) => {
    return new Promise((succes,fail) =>{
        let p = new User(data);
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
        User.deleteOne({_id: id},(err) =>{
            if(err){
                return fail(err);
            }
            return succes();
        });
});
}

const update = (id,data) => {
    return new Promise((succes,fail) =>{
        User.update({_id:id},data,(err) =>{
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