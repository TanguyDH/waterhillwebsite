

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
      service: "gmail",
      auth: {
        user: "tanguydeherdt@gmail.com",
        pass: "wendyam1806",
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