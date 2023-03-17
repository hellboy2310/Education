// step1:- npm i express cors dotenv
//step2:-npm i nodemon 
const express = require('express');
const app = express();
const router  = require('./routes/router')
const cors = require('cors');

const port = 8006;
//this will help us to prin
// app.get('/',(req,res)=>{
//     res.send('sever is running');
// })
app.use(express.json());
app.use(cors());
app.use(router);

//this will listen
app.listen(port,()=>{
    console.log(`server start at port number ${port}`)
})