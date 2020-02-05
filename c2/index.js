console.log('test');
const fs=require('fs');


fs.writeFile('data.txt' , 'hello world', (err) => {
    if (err){
           console.log('could not write file');
        return;
    }
    console.log('succesfully written to file');
    fs.appendFile('data.txt', 'hello back', (err)=>{
        if(err){
            console.log('could not append to file');
        return;
    }
        console.log('append executed sucessfully');
        fs.readFile('data.txt', 'utf8' , (err,data)=>{
            if(err){
                console.log('cannot read the file');
            return;
            }
            console.log('file contents:');
            console.log(data);
        
        });
    });
});
const write=(file,content)=>{
    return new Promise((succes,fail) =>{
        fs.writeFile(file,content,(err)=>{
            if(err){
                return fail(err);
            }
            return succes();
        });
    });
};



const append=(file,content)=>{
    return new Promise((succes,fail)=>{
        fs.appendFile(file,content,(err)=>{
            if(err){
                return fail(err);
            }
            return succes();
        });
    });
};


const read=(file,)=>{
    return new Promise((succes,fail)=>{
        fs.readFile(file,'utf8',(err, data)=>{
            if(err){
                return fail(err);
            }
            return succes(data);
        });
    });
};
write('file.txt','some content')
.then(()=>{
    return append('file.txt','Some other content');
})
.then(()=>{
    return read('file.txt')
})
.then((data)=>{
    console.log('file contents:');
    console.log(data);
})
.catch(err =>{
    console.log('an error has occured while reading the file ')
});

let str1="eden";
let str2='dva';


let str3=`tri`;   //template string
let ime =`Bojan`;
let pozdrav=`zdravo jas sum ${ime}`;

console.log(pozdrav);
console.log(pozdrav.length);
let str4 =`a+b+c+d`; // [`a`,`b`,`c`,`d`]??
let srt4n = str4.split('+');
console.log(str4n);
