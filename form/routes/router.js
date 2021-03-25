const express=require("express");
const router=express.Router();
const app=express();
app.use("/",router)
const controller=require('../controllers/controller.js');
// router.get("/",controller.signup);
// router.get("/login",controller.login)
router.post("/",(req,res)=>{
    console.log('body data');
    console.log(req.body);
    controller.aftersignup(req.body,res);
})
router.post('/login',(req,res)=>{
    controller.afterlogin(req.body,res);
})
router.delete('/delete',(req,res)=>{
    controller.deleteuser(req.body,res);
})
module.exports=router;