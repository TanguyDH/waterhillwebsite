import axios from "axios"



export const sentForm = async () => {
   return axios
     .post("/.netlify/functions/test", {
       name: "Fred",
     })
     .then(function(response) {
       console.log(response)
     })
     .catch(function(error) {
       console.log(error)
     })


}


