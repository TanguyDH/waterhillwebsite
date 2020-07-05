const nodemailer = require("nodemailer")
import querystring from "querystring"
// const querystring = require("query-string")

exports.handler = function(event, context, callback) {

 

  if (event.httpMethod == "OPTIONS") {
    return {
      headers: { ...headers, Allow: "POST" },
      statusCode: 204,
    }
  }
  const { name, phone, email } = JSON.parse(event.body)
  // const params = querystring.parse(event.body)
  // const name = params.lang || "World"
  // console.log(event.queryStringParameters.name)
  // const params = querystring.parse(event.body)
  // const name = params.name || "World"

  console.log(name)

  const sendMail = (name, phone, email) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      service: "gmail",
      auth: {
        user: "tanguydeherdt@gmail.com",
        pass: "wendyam1806",
      },
    })

    const mailOptions = {
      from: "tanguydeherdt@gmail.com", // sender address
      to: "deherdttanguy@gmail.com", // list of receivers
      subject: `waterhill`, // Subject line
      html: `${name} - ${phone} - ${email}  `, // plain text body
    }
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err)
      else console.log(info)
    })
  }

  sendMail(name, phone, email)

  callback(null, {
    statusCode: 200,
    body: "Merci !",
  })


}

