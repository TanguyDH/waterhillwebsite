import axios from "axios"



export const sentForm = async () => {
   return axios
     .post("http://localhost:9000/test", {
       name: "Fred"
     })
     .then(function(response) {
       console.log(response)
     })
     .catch(function(error) {
       console.log(error)
     })


}


