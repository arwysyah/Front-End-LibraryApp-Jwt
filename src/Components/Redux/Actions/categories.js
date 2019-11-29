import Axios from 'axios'


export const getCategories = (id) => {
    return {
      type: "GET_CATEGORIES",
      payload: Axios.get(`http://localhost:8000/book/search/genre/${id}`)
    }
  
  };