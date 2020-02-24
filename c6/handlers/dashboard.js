const user = require('../models/user')
const viewDashboard = (req, res) =>{
    user.readAll()
    .then(data => {
        res.render('dashboard');
    })
    .catch(err) 
    
}


module.exports = {
    viewDashboard
};