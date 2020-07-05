

// exports.handler = function(event, context, callback) {
//   const sgMail = require("@sendgrid/mail")
//   sgMail.setApiKey(
//     "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"
//   )
// const msg = {
//   to: "tanguydeherdt@hotmail.com",
//   from: "tanguydeherdt@hotmail.com",
//   subject: "subknkject",
//   text: "text",
//   html: "<strong>texttkkexttext</strong>",
// }

//  sgMail
//   .send(msg)

//   callback(null, { statusCode: 200, body: 'sisis' })
//   // .then(response =>
//   //   callback(null, { statusCode: 200, body: 'sisis' })
//   // )
//   //   .catch(err => callback(err, null))

// }



// const client = require("@sendgrid/mail")

// function sendEmail(client, message, senderEmail, senderName) {
//   return new Promise((fulfill, reject) => {
//     const data = {
//       from: {
//         email: senderEmail,
//         name: senderName
//       },
//       subject: 'Netlify Function - Sendgrid Email',
//       to: 'tanguydeherdt@gmail.com',
//       html: `Hey, you\'ve sent an email from Netlify Functions<br/>Message: ${message}`
//     }

//     client
//       .send(data)
//       .then(([response, body]) => {
//         fulfill(response)
//       })
//       .catch(error => reject(error))
//   })
// }

// exports.handler = function (event, context, callback) {
//   // const {
//   //   SENDGRID_API_KEY,
//   //   SENDGRID_SENDER_EMAIL,
//   //   SENDGRID_SENDER_NAME
//   // } = process.env

//   // const body = JSON.parse(event.body)
//   // const message = body.message

//   // client.setApiKey(process.env.SENDGRID_API_KEY)

//   client.setApiKey('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')

//   sendEmail(
//     client,
//     'message',
//     "tanguydeherdt@hotmail.com",
//     'tanguy'
//   )
//     .then(response => callback(null, { statusCode: response.statusCode, body: "Merci !" }))
//     .catch(err => callback(err, null))
// }







const nodemailer = require("nodemailer")

exports.handler = function(event, context, callback) {
 
  // const { name, email, phone, message } = JSON.parse(event.body)
  const sendMail = (name, email, phone, message) => {
   
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, 
      service: "gmail",
      auth: {
        user: 'tanguydeherdt@gmail.com',
        pass:  'wendyam1806',
      },
    })

    

    const mailOptions = {
      from: "tanguydeherdt@gmail.com", // sender address
      to: "deherdttanguy@gmail.com", // list of receivers
      subject: `Message from ${name} to FoodAllergyFriendly website`, // Subject line
      html: `${name} avec l'adresse ${email} et le numéro de téléphone ${phone} a écrit ceci: <br> <p>${message}</p>`, // plain text body
    }
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err)
      else console.log(info)
    })
  }

  // sendMail(name, email, phone, message);
  sendMail()
  callback(null, {
    statusCode: 200,
    body: "Merci !",
  })





}



// const sgMail = require('@sendgrid/mail');

// exports.handler = function (event, context, callback) {

//   // const emails = {
//   //   Marketing: 'marketing@helloworld.com',
//   //   Sales: 'sales@helloworld.com'
//   // };

//   const msg = {
//     to: 'tanguydeherdt@gmail.com',
//     from: 'tanguydeherdt@hotmail.com',
//     subject: 'New Contact Form Submission',
//     text: 'text',
//     html: 'html',
//   };


//   // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//   sgMail.setApiKey("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");

//   // Send the message.
//    sgMail
//     .send(msg)
//     .then(() => {
 
//       console.log(msg);

//       callback(null, {
//         statusCode: 200,
//         body: JSON.stringify(msg),
//       });
//     })
//     .catch(error => callback(error));

//       // callback(null, {
//       //   statusCode: 200,
//       //   body: JSON.stringify(msg),
//       // });
// };






// var sesAccessKey = 'tanguydeherdt@gmail.com'
// var sesSecretKey = 'wendyam1806'

// exports.handler = function (event, context, callback) {

//   var nodemailer = require('nodemailer');
//   var smtpTransport = require('nodemailer-smtp-transport');

//   var transporter = nodemailer.createTransport(smtpTransport({
//     service: 'gmail',
//     auth: {
//       user: sesAccessKey,
//       pass: sesSecretKey
//     }
//   }));

//   var text = 'Email body goes here';

//   var mailOptions = {
//     from: "tanguydeherdt@gmail.com",
//     to: "tanguydeherdt@hotmail.com",
//     bcc: "tanguydeherdt@gmail.com",
//     subject: "Test subject",
//     text: text,
//   }

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       const response = {
//         statusCode: 500,
//         body: JSON.stringify({
//           error: error.message,
//         }),
//       };
//       callback(null, response);
//     }
//     const response = {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: `Email processed succesfully!`
//       }),
//     };
//     callback(null, response);
 
//   });
// }

