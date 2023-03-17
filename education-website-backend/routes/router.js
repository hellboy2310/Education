const express  = require('express');
const router = new express.Router();
"use strict";
const nodemailer = require("nodemailer");

router.post("/register",(req,res)=>{
    // console.log(req.body);
    const {mail,subject,body} = req.body;

    try{
      
        
        // async..await is not allowed in global scope, must use a wrapper
        async function main() {
        
          // create reusable transporter object using the default SMTP transport
          let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: "bhaveshpurohit2310@gmail.com", // generated ethereal user
              pass: "wbcubtkicndmycrb", // generated ethereal password
            },
          });
        
          // send mail with defined transport object
          let info = await transporter.sendMail({
            from:  mail, // sender address
            to: "190020107075ait@gmail.com", // list of receivers
            subject: subject, // Subject line
             
            html: body, // html body
          });
        
          console.log("Message sent: %s", info.messageId);
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
          // Preview only available when sending through an Ethereal account
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }
        
        main().catch(console.error);
        
    }
    catch{

    }
})


module.exports = router