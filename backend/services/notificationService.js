const nodemailer = require('nodemailer');

class NotificationService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'larinstas456@gmail.com',
        pass: 'lrpy hjvx qjwn ymqg'
      }
    });
  }

  sendNotification(email, subject, text) {
    const mailOptions = {
      from: 'larinstas456@gmail.com',
      to: email,
      subject: subject,
      text: text
    };

    return new Promise((resolve, reject) => {
      this.transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return reject(error);
        }
        resolve(info);
      });
    });
  }
}

module.exports = new NotificationService();