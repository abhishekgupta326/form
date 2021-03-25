const express=require("express");
const app=express();
var sql=require('./librarydatabase/database.js')
var router=require('./routes/router.js');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/",router)
.listen(8000,(req,res)=>{
    console.log("server running");
})