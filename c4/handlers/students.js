const fs = require('fs');
const STUDENTS_FILE = './students.json';

const getStudents = (req,res) => {
    fs.readFile(STUDENTS_FILE, 'utf8',(err,data) =>{
        if(err){
            console.log('An error has occured while reading the file ');
            res.status(500).send('could not read the file');
            return;
        }
        let dt ={
          students: JSON.parse(data)  
        };
        res.render('students',dt)
    });
};

const postStudents = (req,res) => {
    fs.readFile(STUDENTS_FILE, 'utf8',(err,data) =>{
        if(err){
            console.log('An error has occured while reading the file ');
            res.status(500).send('could not read the file');
            return;
        }
        data = JSON.parse(data);
        data.push({
            id: new Date().getTime(),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            avg_grade: Number(req.body.avg_grade)
        });
        data = JSON.stringify(data);
        fs.writeFile(STUDENTS_FILE,data,(err) =>{
            if(err){
                console.log('An error has occured while reading the file ');
                res.status(500).send('could not read the file');
                return;
            } 
            res.redirect('/students')
        })
    });
    
};

module.exports = {
    getStudents,
    postStudents,
};
   