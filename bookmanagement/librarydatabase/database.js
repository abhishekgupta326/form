const mysql=require("mysql");
let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'libraray_management'
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  module.exports=con;