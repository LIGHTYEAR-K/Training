const serv=require('express');
const chalk=require('chalk');
const debug=require('debug')('app');
const morgan=require('morgan');
const path=require('path');
const ejs=require('ejs');
const PORT = process.env.PORT||4000
const app=serv();

app.use(morgan('tiny'));// combined
app.use(serv.static(path.join(__dirname,'/src/views/')));

app.set('views','./src/views');
app.set('views engine','ejs');

app.get('/',(req,res)=>{
     res.render('index',{title:'web host'});
});
app.listen(PORT,()=>{
   console.log('server stared..')
});