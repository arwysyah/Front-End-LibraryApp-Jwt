import Axios from 'axios'


export const postHistory = () => {
    return {
      type: "POST_HISTORY",
      payload: Axios.post("http://localhost:8000/history")
    }
  
  };