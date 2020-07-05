const nodemailer = require("nodemailer")
import querystring from "querystring"
// const querystring = require("query-string")

exports.handler = function(event, context, callback) {

   if (event.httpMethod !== "POST") {
     return { statusCode: 405, body: "Method Not Allowed" }
   }
 
  const { name } = event.body;
  // const params = querystring.parse(event.body)
  // const name = params.lang || "World"
  // console.log(event.queryStringParameters.name)
  // const params = querystring.parse(event.body)
  // const name = params.name || "World"

  console.log(name)

  const sendMail = (name) => {
   
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
      subject: `waterhill`, // Subject line
      html: `${name} avec l'adresse  et le numéro de téléphone  a écrit ceci: <br> </p>`, // plain text body
    }
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err)
      else console.log(info)
    })
  }

  sendMail(name)

  callback(null, {
    statusCode: 200,
    body: "Merci !",
  })


}

