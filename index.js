const request = require('request');
const express=require('express');
const app=express();
const cors=require('cors');
require('dotenv').config();
const currencyRouter=require('./routes/currency');
const PORT=process.env.PORT;

app.use(cors());
app.get('/',(req,res)=>{
    res.setHeader("Access-Control-Allow-Credentials","true");
    res.send("API is running");
});
app.use('/getConverted',currencyRouter);
app.listen(PORT,()=>{
  console.log(`Server is listening on port http://localhost:${PORT}`);
});


