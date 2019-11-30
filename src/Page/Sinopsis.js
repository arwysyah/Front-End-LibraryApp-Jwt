import React, { Component } from "react";
import "./Sinopsis.css";
import { Link } from "react-router-dom";
import EditModal from "../Components/editModal";
import M from "materialize-css";
import { connect } from "react-redux";
import { getBookbyId } from "../Components/Redux/Actions/books";
import { putBook } from "../Components/Redux/Actions/books";
import { deleteBook } from "../Components/Redux/Actions/books";
import { updateStatus } from "../Components/Redux/Actions/updatestatus";
import {postHistory} from '../Components/Redux/Actions/History'
import swal from "sweetalert";
import decode from "jwt-decode";
import { postWishlist } from "../Components/Redux/Actions/wishlist";


class Sinopsis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      tempbooks: {
        tittle: "",
        author: "",
        image_url: "",
        description: "",
        status: "",
        genre: ""
      },
      user_level:0,
      user_id: '',
    };
  }
  async componentDidMount() {
    const { id } = this.props.match.params;
    await this.props.dispatch(getBookbyId(id));
    // id dari variabel dimasukanna

    this.setState({
      data: this.props.data.bookData,
      tempbooks: this.props.data.bookData //tempbook agar data yang ditampilin tidak nerubah
    });

    let token = localStorage.jwt; //jwt nama localstoragenya
    console.log("local", localStorage, token);
    if (token) {
    const  profile = decode(token);
    const  level = profile.result.level;
    const id =profile.result.id ;
    console.log('profile',profile)

    this.setState({
      user_level:level,
      user_id:id
    })
      
      console.log("ini levelnya", level);
      // console.log("ini profile",profile,level)
    }
    M.AutoInit();
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      tempbooks: { ...this.state.tempbooks, [name]: value }
    });
  };

  handleWishlist=(e)=>{
    const { id } = this.props.match.params;
    e.preventDefault();
    if (!localStorage.jwt) {
      swal(`You didn't have account !
    Please create your account`).then(() => {
        window.location.href = "../login";
      });
    } else {
      swal({
        title: "Are you sure?",
        text: `      PLEASE KLIK OK TO CONTINUE !
      `,
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(async klikOk => {
        if (klikOk) {
          const data = {
              id_user: this.state.user_id,
              id_book:this.props.match.params.id
                           }
            console.log('ini data',data)
          await this.props.dispatch(postWishlist(data)).then(()=>{
            swal("Success Add to Your Wishlist");

          })
        
        } else {
          swal("Your imaginary file is safe!");
          
        }
      
      })
    }}
    
  
  handleBorrow = e => {
    const newUpdate = {
     
    status: 2
      
    };
    const { id } = this.props.match.params;
    

    e.preventDefault();
    if (!localStorage.jwt) {
      swal(`You didn't have account !
    Please create your account`).then(() => {
        window.location.href = "../login";
      });
    } else {
      swal({
        title: "Are you sure?",
        text: `      PLEASE KLIK OK TO CONTINUE !
      `,
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(async klikOk => {
        if (klikOk) {
          const data = {
              id_user: this.state.user_id,
              id_book:parseInt(this.props.match.params.id
                )             }
            console.log(data)
          await this.props.dispatch(postHistory(data)).then(()=>{

          })
         
          //  .then(() =>
            
          
          // swal("Thank You for Using Our Services!", {
          //     icon: "success"
          //   })
          // )
          // .then(()=>{window.location.href="/"
          swal("Your imaginary file is safe!");
          // })
        } else {
          swal("Your imaginary file is safe!");
          
        }
        console.log('ini update',newUpdate)
      })
    }
  };
  handleDelete = event => {
    // const {
     
    //   status
    // } = this.state.tempbooks;

    
    const { id } = this.props.match.params;
    event.preventDefault();

    swal({
      title: "Are you sure?",
      text:
        "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(async klikOk => {
      if (klikOk) {
        await this.props.dispatch(deleteBook(id)).then(() =>
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success"
          }).then(() => (window.location.href = `/`))
        );
      } else {
        swal("Your imaginary file is safe!");
      }
    }).then(()=>{});

    
  };

  handleonSubmit = event => {
    const { id } = this.props.match.params;

    event.preventDefault();
    console.log("ini handle on Submit");
    const {
      tittle,
      author,
      image_url,
      description,
      genre,
      status
    } = this.state.tempbooks;

    const newEdit = {
      tittle: tittle, // ini yang bakal di post ke database, jadi namanya harus dissesuain
      author,
      image_url,
      description,
      status,
      genre
    };
    console.log({ hasilsubmit: newEdit }); // parameternya dalah new book (bagian terakhhir dari add book)
    this.props
      .dispatch(putBook(newEdit, id))
      .then(() => (window.location.href = `/Sinopsis/${id}`));
  };

  render() {
    console.log("Ini Delete ",this.state.tempbooks.status);

    const {
      // untuk mempersingkat penamaan
      tittle, // karena sudah di declare disini jadi this.state.tempbooksnya berubah menjadi title doang
      author,
      image_url,
      description,
      status,
      genre
    } = this.state.tempbooks;

    // const {img,  btitle, description,author }= this.state.boo
    console.log(this.state.data);

    return (
      <div>
        <div
          className="background"
          style={{ backgroundImage: `url(${this.state.data.image_url})` }}
        >
          {/* <p>
           < a className="waves-effect waves-light btn" style= {{marginLeft:"1200px"}}>BUTTON</a>
          
           </p> */}
          <div class="row">
            <Link to={"/"}>
              <div class="col s12">
                {" "}

              
                <a
                  href
                  className="material-icons btn transparent white  "
                  style={{
                    width: "80px",

                    fontSize: "10px",
                    borderRadius: "4px",
                    height: "40px"
                  }}
                > 
                    <i className= "arrow back material-icons " 
                style = {{width:"50px", fontSize:"45px"}}>
                arrow_back
                </i>
                  
                 </a>
              </div>
            </Link>
            <div class="col s6">
              {this.state.user_level === 2 ? (
                <div id="button bold" style={{ marginTop: "10px" }}>
                  <button
                    className=" back waves-effect waves-light black-text btn modal-trigger "
                    data-target="editmodal1"
                    style={{
                      marginLeft: "1130px",
                      width: "80px",
                      
                      fontSize: "10px",
                      borderRadius: "4px",
                    
                      boxShadow:'2px 3px',
                      height: "30px",
                      marginTop:"-105px"
                    }}
                  >
                    EDIT
                  </button>

                  <button
                    onClick={this.handleDelete.bind(this)}
                    className=" edit waves-effect waves-light black-text btn modal-trigger "
                    style={{
                      marginLeft:'1225px',
                      width: "80px",
                      fontSize: "10px",
                      borderRadius: "4px",
                      boxShadow:'2px 3px',
                      height: "30px",
                      marginTop:'-150px'
                    }}
                  >
                    DELETE
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {
          <div className="smallcard">
            <img src={this.state.data.image_url} alt="smallcard" />
          </div>
        }

        <a href className="href waves-effect waves-light btn black-text yellow accent-2">
          Novel
        </a>
        <a href className="right  btn  ">
          {this.state.data.status === 1 ? "available" : "unavailable"}
        </a>

        <div className="card-content1">
          {this.state.user_level === 1 ? (
            <div> 
            <button
              onClick={this.handleBorrow}
              className="borrow black-text btn red"
              data-target="borrow_modal"
            >
              Borrow
            </button>
             <button
             onClick={this.handleWishlist}
             className="wishlist black-text btn yellow"
             data-target="wishlist_modal"
             style={{marginLeft:'250px'}}
           >
             Wishlist
           </button>
           </div>
          ) : (
            ""
          )}

          <h1 className="head">{this.state.data.tittle}</h1>

          <p
            style={{
              width: "auto",
              textAlign: "justifyContent",
              fontfamily: "Source Sans Pro"
            }}
          >
            {this.state.data.description}
          </p>
        </div>
        <EditModal
          tittle={tittle} // disini berubah namanya disederhanakan
          author={author} //namaprops = nilai props
          image_url={image_url}
          description={description}
          status={status}
          genre={genre}
          onChange={this.handleChange.bind(this)}
          onSubmit={this.handleonSubmit.bind(this)}
          // image_url={this.state.tempbooks.image_url}
          // title={this.state.data.tittle}
          // description={this.state.data.description}
          // onSubmit={this.handleonSubmit}
          // onChange={this.handleChange}
        />
       
      </div>
     
      
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.getByID,
    editBooks: state.putBook,
    deleteBooks: state.deleteBook,
    updateStatus: state.updateStatus //namaProps : state.nama file di reducer folder yang di import dari index.js
  };
};
export default connect(mapStateToProps)(Sinopsis); // menggabungin redux
