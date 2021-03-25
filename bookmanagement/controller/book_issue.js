const e = require('express');
const con=require('../librarydatabase/database.js')
const path=require("path");
exports.issuebooksget=(req,res)=>{
    res.sendFile(path.resolve('./frontend/book_issue.html'))
}
exports.issuebookspost=(req,res)=>{
    const query1=`INSERT INTO studentbook VALUES(2,"A","2021-3-3")`
    con.query(query1,(err,res)=>{
        if (err){
            console.log(err);
        }
        else{
            console.log(res);
        }
    })
    res.end();
}