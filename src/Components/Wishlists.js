import React, { Component } from 'react';
import axios from 'axios'

class Wishlist extends Component{
    constructor(props){
        
        super(props)
        this.state={
            whislist :[]
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:8000/whislists/105`)
        .then(res=>{
            console.log("ini res",res)
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
                      <tr>
                          <td>whislist author</td>
                          <td>whislist title</td>
                          <td>image_url</td>
                      </tr>
                  </tbody>
              </table>
          </div>
    );
                
        
    }

}

export default Wishlist
