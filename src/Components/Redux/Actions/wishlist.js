import Axios from 'axios'

export const postWishlist = (data) => {
    return {
      type: "POST_WISHLIST",
      payload: Axios.post("http://localhost:8000/wishlist",data)
    }
    
  
  }
  export const deleteInWishlist = (id_book,id_user)=>{
    return{
      type : "DELETE_WISHLIST",
      payload : Axios.delete(`http://localhost:8000/wishlists?id_book=${id_book}&id_user=${id_user}`)
    }
  }