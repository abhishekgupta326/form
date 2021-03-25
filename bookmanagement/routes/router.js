var express=require("express");
var route=express.Router();
var book_issue=require('../controller/book_issue')
const student_details=require('../controller/student_detail')
route.get("/book_issue",book_issue.issuebooksget)
route.post("/book_issue",book_issue.issuebookspost)
route.get("/student_details",student_details.studentdetailsget)
route.post("/student_details",student_details.studentdetailspost)
module.exports=route
