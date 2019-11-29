import Axios from "axios";

export const getBook = () => {
  return {

    type: "GET_BOOK",
    payload: Axios.get("http://localhost:8000/book")
  }

};

export const getBookbyId = (id)=> {
  return{
    type: "GETBOOKBY_ID",
    payload : Axios.get(`http://localhost:8000/book/${id}`)
  }
}
export const postBook = (newBoook)=> { // parameternya ada karena da yang mau di action dari objek dan karena kita mau ngirimkan objek
  return{
    type: "POST_BOOKS",
    payload : Axios.post(`http://localhost:8000/book`, newBoook)
  }
}
export const putBook = (newBoook, id)=> {
  return{
    type: "PUT_BOOKS",
    payload : Axios.put(`http://localhost:8000/book/${id}`, newBoook)
  }
}
export const deleteBook = (id)=> {
  return{
    type: "DELETE_BOOKS",
    payload : Axios.delete(`http://localhost:8000/book/${id}`)
  }
}