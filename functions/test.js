

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







// const nodemailer = require("nodemailer")

// exports.handler = function(event, context, callback) {
 
//   // const { name, email, phone, message } = JSON.parse(event.body)
//   const sendMail = (name, email, phone, message) => {
   
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 465,
//       secure: true, 
//       service: "gmail",
//       auth: {
//         user: "tanguydeherdt@gmail.com",
//         pass: "wendyam1806",
//       },
//     })

    

//     const mailOptions = {
//       from: "tanguydeherdt@gmail.com", // sender address
//       to: "tanguydeherdt@hotmail.com", // list of receivers
//       subject: `Message from ${name} to FoodAllergyFriendly website`, // Subject line
//       html: `${name} avec l'adresse ${email} et le numéro de téléphone ${phone} a écrit ceci: <br> <p>${message}</p>`, // plain text body
//     }
//     transporter.sendMail(mailOptions, function(err, info) {
//       if (err) console.log(err)
//       else console.log(info)
//     })
//   }

//   // sendMail(name, email, phone, message);
//   sendMail();

//   callback(null, {
//     statusCode: 200,
//     body: "Merci !",
//   })




// }



const sgMail = require('@sendgrid/mail');

exports.handler = function (event, context, callback) {
  // Parse the body sent to the function.
  // const body = JSON.parse(event.body);
  // Find the conditional value.
  // const type = body.data.type_of_inquiry.trim();

  // The list of potential email addresses to use.
  const emails = {
    Marketing: 'marketing@helloworld.com',
    Sales: 'sales@helloworld.com'
  };

  // This is the data coming from the form. This is specific to Netlify forms.
  // const dataArray = Object.entries(body.human_fields);
  // Use that data to build a series of <tr> and <td> (table rows and columns)
  // for each field in the form.
  //
  // Note: I'm doing this so the email recipient can see the contents of the
  // form and respond directly via email rather than having to go to the source
  // to find the form contents.
  // const tableData = dataArray
  //   .map(x => `<tr><td>${x[0]}</td><td>${x[1]}</td></td>`)
  //   .join('');
  // Wrap the field data in a table so it will render properly in email clients.
  // const html = `<table><tbody>${tableData}</tbody></table>`;
  // Build a text version of the contents, as well.
  // const text = dataArray.map(x => `${x[0]}: ${x[1]};`).join('');

  // The message object contains the information to pass to SendGrid to send the
  // appropriate email message.
  const msg = {
    to: 'tanguydeherdt@hotmail.com',
    from: 'tanguydeherdt@gmail.com',
    subject: 'New Contact Form Submission',
    text: 'text',
    html: 'html',
  };

  // Set the SendGrid API key.
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // sgMail.setApiKey("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");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  // Send the message.
   sgMail
    .send(msg)
    .then(() => {
      // If the message was successfully sent, we log the object to the console.
      // This enables us to see what was sent directly in the Netlify logs.
      console.log(msg);
      // The callback in this form tells the service initiating this function
      // that it was successful.
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(msg),
      });
    })
    // If the message was not successfully sent, then we catch the error and
    // render it to the logs. This also tells the service that intitiated this
    // function that it was not successful.
    .catch(error => callback(error));
};
