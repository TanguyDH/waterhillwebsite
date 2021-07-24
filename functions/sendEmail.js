// const nodemailer = require("nodemailer")


// exports.handler = function(event, context, callback) {
//   if (event.httpMethod == "OPTIONS") {
//     return {
//       headers: { ...headers, Allow: "POST" },
//       statusCode: 204,
//     }
//   }
//   const { name, phone, email, model, typeOfWater, moq, capType , label, quantity, date, color} = JSON.parse(event.body)
//   // const sendMail = (
//   //   name,
//   //   phone,
//   //   email,
//   //   model,
//   //   typeOfWater,
//   //   moq,
//   //   capType,
//   //   label,
//   //   quantity,
//   //   date,
//   //   color
//   // ) => {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       service: "gmail",
//       auth: {
//         user: "tanguydeherdt@gmail.com",
//         pass: "wendyam18",
//       },
//     })

//     const mailOptions = {
//       from: "tanguydeherdt@gmail.com", // sender address
//       to: "deherdttanguy@gmail.com", // list of receivers
//       subject: `waterhill`, // Subject line
//       // html: `name:${name} - phone:${phone} - email:${email}- model:${model}- typeOfWater:${typeOfWater}- moq:${moq}- capType:${capType}- label:${label}- quantity:${quantity}- date:${date}- color:${color}  `, 
//       html: 'html'
//     }
//     transporter.sendMail(mailOptions, function(err, info) {
//       if (err) {
//          callback(err)
//          console.log(err)
//       }
//       else  {
//           callback(null, {
//             statusCode: 200,
//             body: "Merci !",
//           })
//         console.log(info)
//       }
//     })
//   // }

//   // sendMail(
//   //   name,
//   //   phone,
//   //   email,
//   //   model,
//   //   typeOfWater,
//   //   moq,
//   //   capType,
//   //   label,
//   //   quantity,
//   //   date,
//   //   color
//   // )
// }



const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler =  async (event, context, callback) => {

  const data = JSON.parse(event.body)
   const {
     name,
     phone,
     email,
     businessName,
     TVA,
     adress,
     numero,
     postalCode,
     city,
     description,
     model,
     typeOfWater,
     moq,
     capType,
     label,
     quantity,
     date,
     color
   } = data

  // const body = Object.keys(data).map((k) => {
  //   return `${k}: ${data[k]}`
  // }).join("<br><br>");


  // const mail_to_send = {
  //   to: "me@rajrajhans.com",
  //   from: email,
  //   subject: subject ? subject : 'New Entry from Contact Form',
  //   html: body,
  // };

    const text = `text`

    const mail_to_send = {
      to: "tanguydeherdt@gmail.com", // replace this with your email address
      from: "waterhillwebsite@gmail.com", // replace this with your email address
      // subject: event.subject,
      subject: 'données formulaire',
      text:  `
      voici les données:
      name: ${name},
      phone: ${phone},
      email: ${email},
      businessName: ${businessName},
      TVA: ${TVA},
     adress: ${adress},
     numero: ${numero},
     postalCode: ${postalCode},
     city: ${city},
     description: ${description},
     model: ${model},
     typeOfWater: ${typeOfWater},
     moq: ${moq},
     capType: ${capType},
     label: ${label},
     quantity: ${quantity},
     date: ${date},
     color: ${color}   
      `,
    }

  try{
    await sgMail.send(mail_to_send)
    return {
      statusCode: 200,
      body: "Message sent successfully"
    }
  } catch(e){
    return {
      statusCode: e.code,
      body: e.message
    }
  }

};



// var SibApiV3Sdk = require('sib-api-v3-sdk');
// var defaultClient = SibApiV3Sdk.ApiClient.instance;

// // Configure API key authorization: api-key
// var apiKey = defaultClient.authentications['api-key'];
// // apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

// apiKey.apiKey = process.env.SENDGRID_API_KEY




// exports.handler = function(event, context, callback) {

 

//   if (event.httpMethod == "OPTIONS") {
//     return {
//       headers: { ...headers, Allow: "POST" },
//       statusCode: 204,
//     }
//   }
  
//   const { name, phone, email, model, typeOfWater, moq, capType , label, quantity, date, color} = JSON.parse(event.body)



//   var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

//   var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

//   sendSmtpEmail = {
//     to: [{
//       email: 'tanguydeherdt@hotmail.com',
//       name: 'Tanguy De Herdt'
//     }],
//    "subject": "Hello world",
//    "htmlContent": "<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Sendinblue.</p></body></html>",
//     params: {
//     },
//     headers: {
//       'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
//     }
//   };



//   apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
//     console.log('API called successfully. Returned data: ' + data);
//      callback(null, {
//        statusCode: 200,
//        body: "Merci !",
//      })
//   }, function (error) {
//      callback(error)
//     console.error(error);
//   });




// }

