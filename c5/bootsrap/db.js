const mongoose = require('mongoose');
const cstring = 'mongodb+srv://bari:bariademi1@cluster0-qhb9x.mongodb.net/prodavnica?retryWrites=true&w=majority';

const initDB = () => {
    mongoose.connect(cstring, {useNewUrlParser: true, useUnifiedTopology: true}, (err) =>{
        if(err)
        console.log('Could not connect to database');
        return;
    });

}


module.exports = {
    initDB,
};