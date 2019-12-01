import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import {deleteInWishlist} from '../Components/Redux/Actions/wishlist'
import {connect} from 'react-redux'
class Wishlist extends Component{
    constructor(props){
        
        super(props)
        this.state={
            wishlist :[],
            id_book:''
        }
    }
    componentDidMount(){
        
        axios.get(`http://localhost:8000/wishlists/${this.props.match.params.id_user}`).then(result => {
           this.setState({
               wishlist: result.data.response
           }) 
        console.log(result.data)
            console.log( 'match params',this.props.match.params.id_user)
            console.log(this.state.wishlist)
        }).catch(err => {
            console.log(err)
            console.log(this.props.match.params.id_user)
        })
        
    }
onWishlist=(id_book)=>{
     
    const { id_user } = this.props.match.params;
    
   

    swal({
      title: "Are you sure?",
      text:
        "Once deleted, you will not be able to see this in your Wishlist!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(async klikOk => {
      if (klikOk) {
        await this.props.dispatch(deleteInWishlist(id_book, id_user)).then(() =>
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success"
          })
        //   .then(() => (window.location.href = `/`))
        );
      } else {
        swal("Your imaginary file is safe!");
      }
    }).then(()=>{});


}

    render(){
        console.log(this.state.id_book)
       
        
        return(

          <div className="container">
             <center>
                  <h4>This is Your Wishlist</h4>
                 </center>
              <table>
                  <thead>
                      <tr>
                          
                          <th>Title</th>
                          <th>Image</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {/* <tr>
                          <td>a</td>
                          <td>b</td>
                      </tr> */}
                  {this.state.wishlist.map((wishlist,index)=>(
                     
                    
                      <tr  key={index}>
                          
                        
                          <td>{wishlist.tittle}</td>

                          <td><img src= {wishlist.image_url} height="150px" alt ="wish"/> </td>
                          <td> <button
                    
                    className=" edit waves-effect waves-light black-text btn modal-trigger green  "
                    style={{
                      
                      fontSize: "12px",
                      borderRadius: "4px",
                      textAlign:'center',
                      boxShadow:'2px 3px',
                      height: "30px",
                      width:'80px',
                      
                     
                    }}
                          onClick={(e) =>{
                              e.preventDefault()
                            this.onWishlist(wishlist.id_book)
                            const { id_user } = this.props.match.params;
                            console.log(id_user)
                            console.log(wishlist.id_book)
                          }}>delete</button></td>
                         
                      </tr>
                        ))}
                  </tbody>
              </table>
              <Link to ={'/'}>
              
              <button
                    
                    className=" edit waves-effect waves-light black-text btn modal-trigger yellow  "
                    style={{
                      
                      fontSize: "12px",
                      borderRadius: "4px",
                      textAlign:'center',
                      boxShadow:'2px 3px',
                      height: "30px",
                      width:'80px',
                      bottom:"-40px"
                     
                    }}
                  >
                    Back
                  </button>
                
                  </Link>
          </div>
    );
                
        
    }

}

const mapStateToProps = state => {
    return {
    
      deleteInWishlists: state.deleteInWishlist //namaProps : state.nama file di reducer folder yang di import dari index.js
    };
  };
  export default connect(mapStateToProps)(Wishlist); // menggabungin redux