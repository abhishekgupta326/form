const express = require("express");
const app = express();
const path = require("path");
const con = require('../models/formmodel.js');
// exports.login=(req,res)=>{
//     res.sendFile(path.resolve('./public/html/login.html'));
// }
// exports.signup=(req,res)=>{
//     res.sendFile(path.resolve('./public/html/signup.html'));
// }
exports.aftersignup = async (req, res) => {
    try {
        const password = req.password;
        const rpassword = req.cpassword;
        if (password === rpassword) {
            if ((/^[A-Za-z]+$/).test(password)) {
                const fname = req.fname;
                const lname = req.lname;
                const email = req.email;
                const phone = req.phone;
                const query = `SELECT * FROM employee_details WHERE phone=${phone}`;
                const query1 = `INSERT INTO employee_details VALUES('${email}','${password}','${phone}','${fname}','${lname}');`;
                con.query(query, (error, result) => {
                    if (error) {
                        console.log(error);
                        res.json({
                            status: false,
                            message: "error"
                        });
                    }
                    else if (result.length > 0) {
                        res.json({
                            status: false,
                            message: "phone already exist"
                        });
                    }
                    else {
                        con.query(query1, (error, result) => {
                            if (error) {
                                res.json({
                                    status: false,
                                    message: "error"
                                });
                            }
                            else {
                                res.json({
                                    status: true,
                                    message: "Data inserted Sucessfully"
                                });
                            }
                        }
                        )
                    }
                })
            }
            else {
                res.json({
                    status: true,
                    message: "password must be alphabatic"
                })
            }
        }
        else {
            res.json({
                status: true,
                message: "password not matching"
            });
        }
    }
    catch (error) {
        console.log(error);
    }
}
exports.afterlogin = (req, res) => {
    try {
        const phone = req.phone;
        const password = req.password;
        const query1 = `SELECT * FROM employee_details where phone like '${phone}';`;
        con.query(query1, (error, result) => {
            if (error) {
                res.json({
                    status: false,
                    msg: 'error while fetching details'
                });
            }
            else if (result.length > 0) {
                for (var i of result) {
                    decryptedpasword = i.password;
                }
                if (password == decryptedpasword) {
                    res.json({
                        status: true,
                        message: 'user authenticated successfully'
                    });
                }
                else {
                    res.json({
                        status: false,
                        message: 'password incorrect'
                    });
                }
            }
            else {
                res.json({
                    status: false,
                    message: 'User not found'
                });
            }
        })
    }
    catch (error) {
        res.json({
            status: true,
            message: "error"
        });
    }
}


exports.deleteuser = (req, res) => {
        let prom = new Promise ((resolve, reject) => {
            const phone = '83988165';
            const password = 'aa';
            const query1 = `SELECT * from employee_details WHERE phone like '${phone}' and password like '${password}';`;
            const query2 = `DELETE FROM employee_details WHERE phone like '${phone}' and password like '${password}';`;
            const cuser =con.query(query1,(error, result) => {
                console.log('inside');
                if (result.length > 0) {
                    const duser =con.query(query2, (error, result) => {
                        if (error) {
                            console.log(error);
                            res.json({
                                status: true,
                                message: "User "
                            });
                            return reject(error);
                        }
                        else {
                            res.json({
                                status: true,
                                message: "User deleted sucessfully"
                            })
                            return resolve(result);
                        }
                    })
                }
                else {
                    res.json({
                        status: true,
                        message: "user not exist"
                    });
                }
        })
    
    }).then(result=>{console.log('outside');}).catch(error=>{throw error});
    console.log("outside promise");
}


