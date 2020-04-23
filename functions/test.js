
const axios = require('axios')

exports.handler = function(event, context, callback) {
     const parseBody = JSON.parse(event.body);
     console.log(parseBody);
    axios({
      method: "post",
      url: "https://enmcrb80j20e.x.pipedream.net/",
      data: { name: "James" },
    })
      .then(response => {
        // console.log(response)
        callback(null, {
          statusCode: 200,
          body: "yes",
        })
      })
      .catch(err => {
        console.log(err)
        callback(new Error("Something went wrong!"))
      })

  
}