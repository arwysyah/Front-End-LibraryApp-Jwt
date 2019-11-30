import React, { Component } from "react";
import './Login.css'
import axios from "axios";
import {Redirect,Link} from 'react-router-dom'
import Swal from 'sweetalert2'
// import AuthService from '../Components/Auth/auth'
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataPostLogin:{
        email:'',
        password : ''
      },
      loginKey: false
    };
    // this.Auth = new AuthService()
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this)
  }
//   componentWillMount(){
//     if(this.Auth.loggedIn())
//         this.props.history.replace('/');
//         console.log('ini auth.login',this.Auth.loggedIn())
// }

handleChange =(e) =>{
  let newPostLogin = {...this.state.dataPostLogin}
  newPostLogin[e.target.name]= e.target.value
  this.setState(
     {dataPostLogin : newPostLogin },
    //  console.log ('ini data postLogin',this.state.dataPostLogin),
    //  console.log('ini data newPostingan',this.state.newPostLogin),
    //  console.log('e,target,name',e.target.name)
     )
    
}
handleSubmit=(e)=>{
  e.preventDefault()
  axios.post(`http://localhost:8000/user/login`,this.state.dataPostLogin)
  .then((res)=>{console.log('ini res, response',res,res.data.message,res.data.succes);
    if(res.data.succes === 1){
      localStorage.setItem('jwt', res.data.token)
      this.setState({
        loginKey : true
      })

      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Success to Login',
        showConfirmButton: false,
        timer: 500
      })
    }else{
      alert(res.data.me)
    }
   

  })
  


  

}
// handleFormSubmit(e){
//   e.preventDefault();

//   this.Auth.login(this.state.email,this.state.password)
//       .then(res =>{
//          this.props.history.replace('/');
      
//       console.log('authlogin',this.Auth.login)  })
//       .catch(err =>{
//           alert(err);
//       })
    
// }

  render() {
    if(this.state.loginKey){
      return (
        
      <Redirect to ="/" />
      )

     
    }
    // console.log('ini auth',this.Auth)
    return (

      <div>
        <div>
        <div className="background-image" />
        <div className="title">
          <h3 className="center-align grey-text">Welcome!</h3>
        </div>
        <div className="row">
          <div className="col s12 l4 offset-l4">
            <div className="card grey lighten-3">
              <div className="card-content">
                <h4 className="card-title center-align">Login</h4>
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">email</i>
                      <input name="email" type="email" id="email" className="validate"
                      onChange={this.handleChange} />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
            
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">vpn_key</i>
                      <input name = "password" type="password" id="password" className="validate"
                      onChange={this.handleChange} />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row center-align">
                    <button className="btn waves-effect waves-light" type="submit" name="action"
                    onClick={this.handleSubmit}>Submit
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                  <p className="account">
                Doesn't Have Account   ?
                <Link to ={'/register'}>
                <a className="daftar" href="url">
                  Register Here
                </a>
                </Link>
              </p>
              <p className="account">
                   
                <Link to ={'/'}>
                <a className="daftar" href="url">
                  My Dashboard
                </a>
                </Link>
              </p>
                </form>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

    );
  }
}

export default Login;
