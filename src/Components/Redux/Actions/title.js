import Axios from 'axios'

export const getTitle = (title) =>{
    return{ 
        type : 'GET_TITLE',
        payload : Axios.get(`http://localhost:8000/book/filter/books/search/${title}`) 
    }
}