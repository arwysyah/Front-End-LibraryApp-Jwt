import React, { Component } from "react";
import decode from 'jwt-decode';


class SideNav extends Component {
  constructor(props){
    super(props)
    this.state={
      isToken : false,
      
    }
    
    this.logout=this.logout.bind(this)
  }
  componentDidMount(){
    if (localStorage.getItem("jwt")) {
      this.setState({isToken:true})
    }
    // (localStorage.getItem("jwt")) ? this.setState({isToken:true}) : this.setState({isToken:true})
    //this.setState({isToken : localStorage.getItem("jwt")})
  }
  logout(){
    this.setState({
      token:localStorage.clear()
    })
    window.location.href="./login"

  }
  render(){
  
    let token = localStorage.jwt  //jwt nama localstoragenya
    console.log('local',localStorage,token)
    let profile,username,level,email, id
    if(token){
      profile = decode(token)
      level = profile.result.level
      username=profile.result.username
      email = profile.result.email
      id= profile.result.id
      console.log("ini levelnya",level,username)
    // console.log("ini profile",profile,level)
    }
   
  return (
    <div>
      <ul id="slide-out" className="sidenav  lighten-3">
        <li>
          <div className="user-view"
          style={{height:"400px"}}>
            
            <a href="#user">
              <img
                className="circle"
                src="https://avatars0.githubusercontent.com/u/55026697?s=460&v=4" 
                alt=""
                style = {{width:'150px',height:"150px"}}
              />
            </a>
            <a href="#name">
              <span>Name</span>
              <p className=" name red-text">{username}</p>
            </a>
            <a href="#email">
              <span>Email</span>
  <span className="red-text email">{email}</span>
            </a>
          </div>
        </li>
        {/* {this.props.level === 1 ?  */}
       
        <li>

          <a href={`history/${id}`}
          >History</a>
        </li>
        {/* // : ""}  */}
        
        
        <li>
          
          <a href={`wishlists/${id}`}>Wishlist</a>
        </li>
{this.props.level === 2 ? <li>
          <a className="modal-trigger" data-target="modal1" href="#!">
            Add Books
          </a>
        </li> : ""}
        
        <li>
          <a href="#!"
         onClick={this.logout} > {
           (this.state.isToken) ? <p>Logout</p>  :<p>Login</p>
         } </a> 
        </li>
      </ul>
      <div>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4
              style={{
                color: "black"
              }}
            >
              Add an Book
            </h4>
            <div className="row">
              <form className="col s12" onSubmit={this.props.onSubmit}>
                <div className="row modal-form-row">
                  <div className="input-field col s12">
                    <input
                      name="tittle"
                      id="tittle"
                      type="text"
                      className="validate"
                      value={this.props.title}
                      onChange={this.props.onChange}
                    />
                    <label htmlFor="tittle">Title</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="author"
                      id="author"
                      type="text"
                      className="validate"
                      value={this.props.author}
                      onChange={this.props.onChange}
                    />
                    <label htmlFor="author">Author</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="image_url"
                      id="image_url"
                      type="text"
                      className="validate"
                      value={this.props.image_url}
                      onChange={this.props.onChange}
                    />
                    <label htmlFor="author">Image_url</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="description"
                      id="description"
                      type="text"
                      className="validate"
                      value={this.props.description}
                      onChange={this.props.onChange}
                    />
                    <label htmlFor="description">Description</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <select
                      name="status"
                      id="status"
                      type="text"
                      className="validate"
                      value={this.props.status}
                      onChange={this.props.onChange}
                    >
                      {this.props.statusDropDown}>
                                     
                    </select>
                    <label htmlFor="genre">Status</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <select
                      name="genre"
                      id="genre"
                      type="text"
                      className="validate"
                      value={this.props.genre}
                      onChange={this.props.onChange}
                    >

                      {this.props.genreDropDown}
                    </select>
                    <label htmlFor="genre">Genre</label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    className=" modal-action modal-close waves-effect waves-green btn green top z-depth-5"
                    style={{ marginBottom: "20px" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
};
}
export default SideNav;
