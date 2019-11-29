import Axios from "axios";

export const postLogin = () => {
  return {

    type: "POST_LOGIN",
    payload: Axios.post("http://localhost:8000/user/login")
  }

};

export const postRegister = (dataRegister)=> {
  return{
    type: "POST_REGISTER",
    payload : Axios.post(`http://localhost:8000/user/register`,dataRegister)
  }
}