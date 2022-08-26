const serv=require('express');
  
const host=serv();

host.get('/',(req,res)=>{
     res.send("web server created");
});
host.listen(4002,()=>{
   console.log('server started');
});