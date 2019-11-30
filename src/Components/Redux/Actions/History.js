import Axios from 'axios'


export const postHistory = (data) => {
    return {
      type: "POST_HISTORY",
      payload: Axios.post("http://localhost:8000/borrow",data)
    }
  
  };
  


