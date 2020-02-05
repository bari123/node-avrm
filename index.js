let c1=require('./classes/c1');
var fetch=require('node-fetch');


fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(data => console.log(data))
.catch(err =>console.log(err));