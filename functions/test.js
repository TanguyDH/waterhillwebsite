
const axios = require('axios')
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(
  "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"
)

exports.handler = function(event, context, callback) {
 
//   console.log("sisis", JSON.parse(event.body))
const msg = {
  to: "tanguydeherdt@gmail.com",
  from: "tanguydeherdt@hotmail.com",
  subject: `fer`,
  text: "jj",
  html: "<strong>ypoooooo</strong>",
}

 
sgMail
  .send(msg)
  .then(response => {
    // console.log(response)
   
    callback(null, {
      statusCode: 200,
      body: "yyyy",
    })
  })
  .catch(err => {
    console.log(err)
    callback(new Error("Something went wrong!"))
  })



    //  const parseBody = JSON.parse(event.body);
    //  console.log(parseBody);
    // axios({
    //   method: "post",
    //   url: "https://enmcrb80j20e.x.pipedream.net/",
    //   data: { name: "James" },
    // })
    //   .then(response => {
    //     // console.log(response)
    //     callback(null, {
    //       statusCode: 200,
    //       body: "yes",
    //     })
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     callback(new Error("Something went wrong!"))
    //   })

  
}



// const sgMail = require("@sendgrid/mail")
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// sgMail.setApiKey(
//   "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"
// )
// const msg = {
//   to: "test@example.com",
//   from: "test@example.com",
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// }
// sgMail.send(msg)