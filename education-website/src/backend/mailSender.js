const nodemailer = require("nodemailer");
const express = require('express');
const password  = require('../secrets.js');
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

// async..await is not allowed in global scope, must use a wrapper
async function mailSender(mail,subject,body) {
  

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "bhaveshpurohit2310@gmail.com", // generated ethereal user
      pass: password, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "190020107075@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// main().catch(console.error);
module.exports = mailSender;
// module.exports = {
//   //...
//   plugins: [
//     new NodePolyfillPlugin()
//   ]
// }