import React, { Component } from "react";
import "./Login.css";
// import axios from "axios";
import {Link} from 'react-router-dom'
// import { postRegister } from "../Components/Redux/Actions/users";
// import { connect } from "tls";
import axios from "axios";
// import AuthService from '../Components/Auth/auth'
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      dataPostRegister: {
        username: "",
        email: "",
        password: ""
       
       
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    let newRegister = { ...this.state.dataPostRegister };
    newRegister[e.target.name] = e.target.value;
    this.setState(
      {
        dataPostRegister: newRegister
      },
      console.log("ini data post", this.state.dataPostRegister)
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/user/register", this.state.dataPostRegister)
      .then(res => {
        console.log("ini res", res);
        console.log("ini data regis", this.state.dataPostRegister);
        window.location.href ="/login"
        
      })
      .catch(error => {
        console.log(error);
      });

    // const { name, email, password, level } = this.state.dataPostRegister;
    // const newRegister = {
    //   name,
    //   email,
    //   password,
    //   level
    // };
    // this.props.dispatch(postRegister(newRegister)).then(() => {
    //   window.location.href = "/";
    // // });
    // console.log("ini username", this.state.username);

    // console.log("ini level ", this.state.level);
    // console.log("ini email ", this.state.email);
    // console.log("ini password", this.state.password);
  };

  render() {

    // let token = localStorage.jwt  //jwt nama localstoragenya
    // console.log('local',localStorage,token)
    // let profile,level = this.props
    // if(token){
    //   profile = decode(token)
    //   level = profile.result.level
    //   console.log("ini levelnya",level)
    // console.log("ini profile",profile,level)
    // }
    
    
    return (
      <div>
        <div className="background-image" />
        <div className="title">
          <h3 className="center-align grey-text">Welcome!</h3>
        </div>
        <div className="row">
          <div className="col s12 l4 offset-l4">
            <div className="card grey lighten-3">
              <div className="card-content">
                <h4 className="card-title center-align">Register</h4>
                
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">account_box</i>
                      <input
                        name="username"
                        type="text"
                        id="username"
                        className="validate"
                        onChange={this.handleChange}
                      />
                      <label htmlFor="username">Username</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">email</i>
                      <input
                        name="email"
                        type="email"
                        id="email"
                        className="validate"
                        onChange={this.handleChange}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">vpn_key</i>
                      <input
                        name="password"
                        type="password"
                        id="password"
                        className="validate"
                        onChange={this.handleChange}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                
                  <div className="row center-align">
                    <button
                      className="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                      onClick={this.handleSubmit}
                    >
                      Submit
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                  <p>
                  <Link to ={'/login'}>
                  <a href= "login"> login here </a>
                  </Link>
                </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
// const mapStateToProps = state => {
//   return {
//     dataRegis: state.Auth
//   };
// };

// export default connect(mapStateToProps)(Register);
