const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const con = require('./models/formmodel.js');
const router=require("./routes/router.js");
app.use("/",router);
app.listen("8000",(req,res)=>{
    console.log("listening");
})
