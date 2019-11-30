import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Wishlist extends Component{
    constructor(props){
        
        super(props)
        this.state={
            wishlist :[]
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


    render(){
        
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

                          <td><img src= {wishlist.image_url} height="100px" alt ="wish"/> </td>
                         
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

export default Wishlist
