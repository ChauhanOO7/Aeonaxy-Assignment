const express=require("express");
const router=express.Router();
const nodemailer=require("nodemailer");


router.get("/",(req,res)=>{
    res.send("<h1>Its your Backend</h1>");
});

router.post("/sendmail",(req,res)=>{

    const email=req.body.Email;
    const message=`<p>We wanted to take a moment to thank you for creating your profile with us. Your registration is an important step towards accessing our platform's full range of features and benefits.</p>`;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: '', //use your own smtp gmail service username
          pass: ''  // password
        }
      });

    let mailOptions = {
        from: '', //same email that you filled above in auth.user .
        to: email,
        subject: 'Mail for Thank you',
        html: message
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
            res.json({send:false});
        } else {
           res.json({send:true});
        }
      });
});

module.exports=router;