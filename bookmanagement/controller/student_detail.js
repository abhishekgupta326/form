const e = require('express');
const con=require('../librarydatabase/database.js');
const path=require("path");
exports.studentdetailsget=(req,res)=>{
    res.sendFile(path.resolve('./frontend/student_details.html'))
}
exports.studentdetailspost=(req,res)=>{
    let query1=`SELECT STUDENT.NAME, STUDENT.SEMESTER,BOOK.BOOKNAME,BOOK.AUTHOR,STUDENTBOOK.DATE FROM 
    STUDENTBOOK JOIN STUDENT ON STUDENTBOOK.ROLLNO= STUDENT.ROLLNO JOIN BOOK ON STUDENTBOOK.BOOKID=BOOK.BOOKID
    WHERE STUDENTBOOK.ROLLNO LIKE ${req.body.rollno}`;
    con.query(query1,(err,result)=>{
        if  (err) {throw err}
        else{
             res.json({
            status:200,
            msg:result
        });}
    })
    }