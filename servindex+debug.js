const serv=require('express');
const chalk=require('chalk');
const debug=require('debug')('app');
const morgan=require('morgan');
const path=require('path');
const app=serv();

app.use(morgan('tiny'));// combined
app.use(serv.static(path.join(__dirname,'/files/')))

app.get('/',(req,res)=>{
     res.send("create web server");
});
app.listen(8000,()=>{
   debug('server stared..')
});