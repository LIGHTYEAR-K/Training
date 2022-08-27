const serv=require('express');
const chalk=require('chalk');
const debug=require('debug')('app');
const morgan=require('morgan');
const path=require('path');
const PORT = process.env.PORT||4000
const app=serv();

app.use(morgan('tiny'));// combined
app.use(serv.static(path.join(__dirname,'/files/')))

app.get('/',(req,res)=>{
     res.send("create web server");
});
app.listen(PORT,()=>{
   console.log('server stared..')
});
        
          
      // package.json
//     "name": "node",
//     "version": "1.0.0",
//     "description": "",
//     "main": "helloworld.js",
//     "scripts": {
//       "start": "node app.js",
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//       "chalk": "^4.1.1",
//       "debug": "^4.3.1",
//       "express": "^4.18.1",
//       "morgan": "^1.10.0",
//       "nodemon": "^2.0.1"
//     },
//     "nodemonConfig": {
//       "restartable": "rs",
//       "delay":2500,
//       "env":{
//         "PORT":4000
//       }
//   }
//   }
  