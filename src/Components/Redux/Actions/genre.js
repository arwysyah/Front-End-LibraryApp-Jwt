import Axios from "axios"


export const getGenre = () => {
    return {
        type : 'GET_GENRE',
        payload : Axios.get("http://localhost:8000/book/genre/genre")
    }
};