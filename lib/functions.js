import axios from "axios"



export const sentForm = async () => {
 const { res } = await axios
   .post("http://localhost:9000/test", {
     name: "Fred",
   })
   .then(function(response) {
      return response.json()
   })
   .catch(function(error) {
     console.log(error)
   })
   return res;

}


