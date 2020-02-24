var bcrypt = require('bcryptjs');
var users = require('../models/user');
var jwt = require('jsonwebtoken');

const tokenKey = 'pwd123!';

const viewLogin = (req, res) => {
    res.render('login');
}

const apiLogin = (req, res) => {

    if (req.body.email !==undefined && req.body.email.length >0 &&
        req.body.password !==undefined && req.body.password.length >0 
<<<<<<< HEAD
     ) { 
=======
    ) {   
>>>>>>> e1179dc0284965c5b4a06cf158e3196ec456480a
       users.getByEmail(req.body.email)
       .then(data => {
           if(bcrypt.compareSync(req.body.password, data.password)){
               let token = jwt.sign({ email :data.email } , tokenKey);
               res.cookie('jwt', token);
               res.redirect('/dashboard');
           } else {
               res.redirect('/?err=1')
           }

       })
       .catch(err => {
           res.redirect('/dashboard');
       });
    } else {
       res.redirect('/');
   }
}

const viewRegister = (req, res) => {
    res.render('register');
}

const apiRegister = (req, res) => {

    if(
        req.body.first_name !==undefined && req.body.first_name.length >0 &&
        req.body.last_name !==undefined && req.body.last_name.length >0 &&
        req.body.email !==undefined && req.body.email.length >0 &&
        req.body.password !==undefined && req.body.password.length >0 &&
        req.body.password2 !==undefined && req.body.password2.length >0 &&
        req.body.password2 === req.body.password
    )
    {
        
    var hash = bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync(10)
    );

    users.createNew({
        first_name: req.body.first_name,
        last_name: req.body.first_name,
        email: req.body.email,
        password: hash    
    })
    .then(() =>{
        res.status(201).send('created');
    })
    .catch(() =>{
       // res.status(501).send('internal server error');
       console.log(err);
        res.redirect('/register?err=1')
    })
}
else {
   // res.status(400).send('bad request');
    res.redirect('/register?err=2')
}
    
}

module.exports = {
    viewLogin,
    apiLogin,
    viewRegister,
    apiRegister,
    tokenKey
};