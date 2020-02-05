//console.log("Hello world");
const c2f = (c=0) => {
    return (c*9/5)+32;
}
 
// let r= c2f(38);
//console.log(r);

const f2c = (f=0) => { 
    return (5/9)*(f-32);
}
// let f=f2c(100.4);
//   console.log(f);
// const temp=(t,f)=>{
//   console.log(f(t))
//}; 

//temp(28,c2f);
//temp(90,f2c);


const promiseExample=(num)=>{
    return new Promise((succes,fail)=>{
        if(num===0) {
            throw "zero(0) cannot be neither even nor odd";
        }
        if(num % 2 == 0) {
            succes();
        } else {
            fail();
        }
    });
};


//promiseExample(0)
//.then(
//    ()=>{
//    console.log('succes!Number is even');
//}

//)
//.catch(err=>{
//    console.log('an error has occured', err);
//});

module.exports = {
    c2f,
    f2c,
    // temp,
    promiseExample
};