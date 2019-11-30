import Axios from 'axios'

export const postWishlist = (data) => {
    return {
      type: "POST_WISHLIST",
      payload: Axios.post("http://localhost:8000/wishlist",data)
    }
  
  };