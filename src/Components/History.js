import React, { Component } from 'react';
import axios from 'axios'

class Wishlist extends Component{
    constructor(props){
        
        super(props)
        this.state={
            History:[]
        }
    }
    componentDidMount(){
        // axios.get(`http://localhost:8000/wishlists/${this.props.match.params.id_user}`)
        // .then(res=>{
        //     console.log("ini res",res)
        // })
        axios.get(`http://localhost:8000/wishlists/${this.props.match.params.id_user}`).then(result => {
           this.setState({
               wishlist: result.data.response
           }) 
        console.log(result.data)
            console.log(this.props.match.params.id_user)
            console.log(this.state.wishlist)
        }).catch(err => {
            console.log(err)
            console.log(this.props.match.params.id_user)
        })
        
    }


    render(){
        
        return(

          <div className="container">
              <h4>This is Your Wishlist</h4>
              <table>
                  <thead>
                      <tr>
                          <th>Username</th>
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
                          
                          <td>{wishlist.username}</td>
                          <td>{wishlist.tittle}</td>

                          <td><img src= {wishlist.image_url} height="100px" alt ="wish"/> </td>
                         
                      </tr>
                        ))}
                  </tbody>
              </table>
          </div>
    );
                
        
    }

}

export default Wishlist
