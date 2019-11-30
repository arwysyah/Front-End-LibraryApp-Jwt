import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class history extends Component{
    constructor(props){
        
        super(props)
        this.state={
            history:[]
        }
    }
    componentDidMount(){
        // axios.get(`http://localhost:8000/historys/${this.props.match.params.id_user}`)
        // .then(res=>{
        //     console.log("ini res",res)
        // })
        axios.get(`http://localhost:8000/history/${this.props.match.params.id_user}`).then(result => {
           this.setState({
               history: result.data.response
           }) 
        console.log(result.data)
            console.log(this.props.match.params.id_user)
            console.log(this.state.history)
        }).catch(err => {
            console.log(err)
            console.log(this.props.match.params.id_user)
        })
        
    }


    render(){
        
        return(

          <div className="container">
              <center>
              <h4>This is Your history</h4>
              </center>
              
              <table>
                  <thead>
                      <tr>
                         
                          <th>Title</th>
                          <th>Image</th>
                          <th>Borrow At</th>
                          <th>Return At</th>
                      </tr>
                  </thead>
                  <tbody>
                      {/* <tr>
                          <td>a</td>
                          <td>b</td>
                      </tr> */}
                  {this.state.history.map((history,index)=>(
                     
                    
                      <tr  key={index}>
                          
                         
                          <td>{history.tittle}</td>

                          <td><img src= {history.image_url} height="100px" alt ="wish"/> </td>
                          <td>{history.borrow_at}</td>
                          <td>{history.return_at}</td>
                         
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

export default history
