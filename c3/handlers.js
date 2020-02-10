const index = (req,res)=>{
    res.send('ok');
   }; //get method //req-request res-response
   
const ime=(req,res)=>{
    res.send('pero');
};
const greeting=(req,res)=>{
    res.send(req.params.ime);
};
const calc=(req,res)=>{
    let o=0
    switch(req.params.op){
            case 'add':
                o = Number(req.params.a) + Number(req.params.b);
                break;
            case 'sub':
                o = Number(req.params.a) - Number(req.params.b);
                break;
            case 'mul':
                o = Number(req.params.a) * Number(req.params.b);
                break;
            case 'div':
                o = Number(req.params.a) / Number(req.params.b);
                break;
    }
    res.send(' ' + o);

};

module.exports={
    index,
    ime,
    greeting,
    calc,
};