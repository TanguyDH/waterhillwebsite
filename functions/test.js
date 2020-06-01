

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
      port: 465,
      secure: true, 
      service: "gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    })

    

    const mailOptions = {
      from: "tanguydeherdt@gmail.com", // sender address
      to: "tanguydeherdt@hotmail.com", // list of receivers
      subject: `Message from ${name} to FoodAllergyFriendly website`, // Subject line
      html: `${name} avec l'adresse ${email} et le numéro de téléphone ${phone} a écrit ceci: <br> <p>${message}</p>`, // plain text body
    }
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err)
      else console.log(info)
    })
  }

  // sendMail(name, email, phone, message);
  sendMail();

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
//     to: 'tanguydeherdt@hotmail.com',
//     from: 'tanguydeherdt@hotmail.com',
//     subject: 'New Contact Form Submission',
//     text: 'text',
//     html: 'html',
//   };


//   // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//   sgMail.setApiKey("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")

//   // Send the message.
//    sgMail
//     .send(msg)
//     // .then(() => {
 
//     //   console.log(msg);

//       // callback(null, {
//       //   statusCode: 200,
//       //   body: JSON.stringify(msg),
//       // });
//     // })
//     // .catch(error => callback(error));

//       callback(null, {
//         statusCode: 200,
//         body: JSON.stringify(msg),
//       });
// };
