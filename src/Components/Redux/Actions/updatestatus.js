import Axios from "axios";
export const updateStatus = (newBoook, id)=> {
    return{
      type: "UPDATE_STATUS",
      payload : Axios.put(`http://localhost:8000/book/${id}`, newBoook)
    }
}