const express=require("express");
const router=express.Router();
const {handlesignup,handlecheck,handleupdate,handledata}=require("../controllers/signup");

router.post("/",handlesignup);
router.post("/check",handlecheck);
router.post("/update",handleupdate);
router.post("/getdata",handledata);

module.exports=router;
