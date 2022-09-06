const express=require("express");
const sampledata=require('./sample.json')
const app=express();
const {MongoClient}=require('mongodb')

app.get('/',(req,res)=>
{
  const url=
  'mongodb+srv://dbadmin:zvkuty5laL7yLqOQ@demo.xg7xfko.mongodb.net?retryWrites=true&w=majority'
  const dbName='Sample_datas';
  
(async function mongo(){
  let client;
  try {
    client=await MongoClient.connect(url);
    console.log('connected to the DataBase');
    const db=client.db(dbName);
    // const response=await db.collection('sampledata').insertMany(sampledata);   // to Create a Database
    // res.json(response);
    const attack=await db.collection('sampledata').find().toArray;                 // to Fetch Data from the Database
    res.json(attack);
  } catch (error) {
    console.log(error.stack)
  }
}())
});
