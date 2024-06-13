const nodemailer = require('nodemailer');
const twilio = require('twilio');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

const client = new twilio('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');

const sendVerificationSMS = (phone) => {
  client.messages.create({
    body: 'Your verification code is 123456',
    to: phone,
    from: 'your-twilio-phone-number'
  }).then(message => console.log(message.sid));
};

const sendResetPasswordEmail = (email, token) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Password Reset',
    text: `You requested for a password reset. Please use the following token to reset your password: ${token}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
};

module.exports = { sendVerificationSMS, sendResetPasswordEmail };