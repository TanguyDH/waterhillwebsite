import axios from "axios"



export const sentForm = async d => {
    //  const { data } = await
      axios.post("http://localhost:9000/test", d)
//   return data

}