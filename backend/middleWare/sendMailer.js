/******************************************************************************
 *  Execution        :   1. default node         cmd> node sendMailer.js 
 *  Purpose          : Define nodeMailer to using send the mail to user 
 *
 *  @file            : sendMailer.js
 *  @overview        : Using sendEmail send the token to the user
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 30/03/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
var nodemailer = require('nodemailer');
exports.sendEmailFunction=(url)=>{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:process.env.email,
    pass:process.env.password
  }
});
//define the who send the details with whom with message
var mailOptions = {
  from: process.env.email,
  to: process.env.email,
  subject: 'Sending Email using Node.js',
  text :  url
};
//verify correct responce and send the Email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}