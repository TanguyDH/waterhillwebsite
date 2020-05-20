// const sgMail = require("@sendgrid/mail")
// sgMail.setApiKey(
//   "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"
// )

// exports.handler = function(event, context, callback) {



 

// const msg = {
//   to: "tanguydeherdt@gmail.com",
//   from: "deherdttanguy@gmail.com",
//   subject: "subject",
//   text: "text",
//   html: "<strong>texttexttext</strong>",
// }

// sgMail
//   .send(msg)
//   .then(response =>
//     callback(null, { statusCode: response.statusCode, body: 'sisis' })
//   )
//   .catch(err => callback(err, null))

//   // .then(response => {
//   //   callback(null, {
//   //     statusCode: 200,
//   //     body: response,
//   //   })
//   // })
//   // .catch(err => {
//   //   console.log(err)
//   //   callback(new Error("Something went wrong!"))
//   // })



//     //  const parseBody = JSON.parse(event.body);
//     //  console.log(parseBody);
//     // axios({
//     //   method: "post",
//     //   url: "https://enmcrb80j20e.x.pipedream.net/",
//     //   data: { name: "James" },
//     // })
//     //   .then(response => {
//     //     // console.log(response)
//     //     callback(null, {
//     //       statusCode: 200,
//     //       body: "yes",
//     //     })
//     //   })
//     //   .catch(err => {
//     //     console.log(err)
//     //     callback(new Error("Something went wrong!"))
//     //   })

  
// }







const nodemailer = require("nodemailer")

exports.handler = function(event, context, callback) {
 
  const { name, email, phone, message } = JSON.parse(event.body)
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

  return sendMail(name, email, phone, message).then(() => {
    callback(null, {
      statusCode: 200,
      body: "Merci !",
    })

  })

 



}