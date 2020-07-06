const nodemailer = require("nodemailer")


exports.handler = function(event, context, callback) {

 

  if (event.httpMethod == "OPTIONS") {
    return {
      headers: { ...headers, Allow: "POST" },
      statusCode: 204,
    }
  }
  const { name, phone, email, model, typeOfWater, moq, capType , label, quantity, date, color} = JSON.parse(event.body)

  console.log(name)

  const sendMail = (
    name,
    phone,
    email,
    model,
    typeOfWater,
    moq,
    capType,
    label,
    quantity,
    date,
    color
  ) => {
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
      html: `name:${name} - phone:${phone} - email:${email}- model:${model}- typeOfWater:${typeOfWater}- moq:${moq}- capType:${capType}- label:${label}- quantity:${quantity}- date:${date}- color:${color}  `, // plain text body
    }
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err)
      else console.log(info)
    })
  }

  sendMail(
    name,
    phone,
    email,
    model,
    typeOfWater,
    moq,
    capType,
    label,
    quantity,
    date,
    color
  )

  callback(null, {
    statusCode: 200,
    body: "Merci !",
  })


}

