var nodemailer = require('nodemailer');
exports.sendEmailFunction=(url)=>{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:process.env.email,
    pass:process.env.password
  }
});

var mailOptions = {
  from: 'shegokarshubhangi10@gmail.com',
  to: 'shegokarshubhangi10@gmail.com',
  subject: 'Sending Email using Node.js',
  text :  url
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}