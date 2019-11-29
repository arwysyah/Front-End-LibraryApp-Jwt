import React, { Component } from "react";
import Navbar from "../Components/NavBar";
import { connect } from "react-redux";
import M from "materialize-css";
import Carousel from "../Components/Carousel";
import SideNav from "../Components/SideNav";
import ListCards from "../Components/ListCards";
import { getBook } from "../Components/Redux/Actions/books";
import { postBook } from "../Components/Redux/Actions/books";
import { getGenre } from "../Components/Redux/Actions/genre";
import { getStatus } from "../Components/Redux/Actions/status";
import { getTitle } from "../Components/Redux/Actions/title";
import {getCategories} from "../Components/Redux/Actions/categories"
import Pagination from '../Components/pagination'
import '../Components/pagination.css'
import decode from 'jwt-decode'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // books: [],
      tempBooks: {
        tittle: "",
        author: "",
        image_url: "",
        description: "",
        status: "1",
        genre: "1",
        
      },
      data: [],

      allGenre: [],
      allStatus: [],
      optTitle: [],
      categData: [],
      currentPage: 1,
      postsPerPage: 6,
      searchValue: ''
    };
  }
  async componentDidMount() {
    console.log("didmount");

    await this.props.dispatch(getBook()); // menunggu sampai properti di kirim
    await this.props.dispatch(getGenre());
    await this.props.dispatch(getStatus());
    
   

    this.setState({
      data: this.props.databooks.bookData, //data itu nama yang dideclare di bawah konek
      allGenre: this.props.datagenre.genreData, // bookData dari reducer
      allStatus: this.props.datastatus.statusData,
      // optTitle: this.props.datatitle.titleData
      
    });
    M.AutoInit();

    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
  }

    
    
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      tempBooks: { ...this.state.tempBooks, [name]: value }
    });
  };

  handleCategories =event=>{
    console.log('this handle categories', event.target.value)
    event.preventDefault()
    const Categ = event.target.value
    this.props.dispatch(getCategories(Categ)).then(()=>{
      this.setState({ data: this.props.dataCategories.categoriesData})
    })
  }

  onchangeSearch = event => {
    const search =event.target.value  

    this.setState({
      searchValue: search
    })

  }

  handleSearch = event =>{
    event.preventDefault()

this.props.dispatch(getTitle(this.state.searchValue)).then(()=>{
  this.setState({data : this.props.datatitle.titleData
   
  })
})
  }

  handleonSubmit = event => {
    event.preventDefault();
    console.log("ini handle on Submit");

    const {
      tittle, // karena sudah di declare disini jadi this.state.tempbooksnya berubah menjadi title doang
      author,
      image_url,
      description,
      status,
      genre
    } = this.state.tempBooks;

    const newBook = {
      tittle: tittle, // ini yang bakal di post ke database, jadi namanya harus dissesuain
      author,
      image_url,
      description,
      status,
      genre
    };

    console.log({ hasilsubmit: newBook }); // parameternya dalah new book (bagian terakhhir dari add book)
    this.props.dispatch(postBook(newBook)).then(() => {
      window.location.href = "/";
    });
  };

  render()
  

   {  console.log('ini local storage ',localStorage)
    console.log('ini isi list book ' , this.props.databooks.bookData)


    let token = localStorage.jwt  //jwt nama localstoragenya
    console.log('local',localStorage,token)
    let profile,level
    if(token){
      profile = decode(token)
      level = profile.result.level
      console.log("ini levelnya",level)
    // console.log("ini profile",profile,level)
    }
    
  // Get current posts
  const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
  const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
  const currentPosts = this.state.data.slice(indexOfFirstPost, indexOfLastPost);

    // console.log("dat",this.state.optTitle)
    const {
      tittle, // karena sudah di declare disini jadi this.state.tempbooksnya berubah menjadi title doang
      author,
      image_url,
      description,
      status,
      genre
    } = this.state.tempBooks;
    // console.log("ini isi tempbooks " , this.state.tempBooks);
    // console.log(this.state.allGenre);
    // console.log("ini status" ,this.state.allStatus);
    // console.log("ini opsion title " , this.state.optTitle);

    return (
      <div className="home">
        <Navbar
        handleCategories={this.handleCategories}
        
        > <div>
        
          <li>
         
          <form onSubmit={this.handleSearch}>
          <div class="input-field" style ={{marginTop: "7px",width:"50%" ,height:"50px"}}>
          <input id="search" type="search" required onChange={this.onchangeSearch} style={{color:"black" ,marginLeft:"160px",backgroundColor:"white"}}/>
               
                  <i
                    className="material-icons black-text" style ={{marginTop :"-5px",left:"120px",width:"10px"}}
                    
                  >
                    search
                  </i>
               
                  </div>
          </form>
          
          </li>
                
              
              </div>
        </Navbar>
        <SideNav
          level={level}
          tittle={tittle} // disini berubah namanya disederhanakan
          author={author} //namaprops = nilai props
          image_url={image_url}
          description={description}
          status={status}
          genre={genre}
          onChange={this.handleChange.bind(this)}
          onSubmit={this.handleonSubmit.bind(this)}
          genreDropDown={this.state.allGenre.map((g, i) => {
            return (
              <option value={g.id}>
                {g.genre}
                {}
              </option> // hasil map di dalam option di add modul
            );
          })}
          statusDropDown={this.state.allStatus.map((s, i) => {
            return (
              <option value={s.id}>
                {s.status}
                {}
              </option>
            );
          })}
        />
        <Carousel />

        <div className="container">
          <h4
            style={{
              marginBottom: "30px",
              paddingLeft: "5px"
            }}
          >
            List Books
          </h4>
          <div className="row">
            {currentPosts.map((book, index) => {
              // disini data ddalam bentuk objek di rander
              return (
                
                <ListCards
                  alt={book.tittle.trim()}
                  to={`/Sinopsis/${book.id}`}
                  id={index}
                  key={index}
                  title={book.tittle}
                  img={book.image_url}
                  description={book.description}
                />
              );
            })}
          </div>
          <Pagination 
          style= {{margin :"center"}}
          postsPerPage={this.state.postsPerPage} 
          totalPosts={this.state.data.length} 
          paginate={pageNum => {
            this.setState({currentPage: pageNum})
          }}/>
        </div>
        <div></div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    databooks: state.getBooks,
    datapost: state.postBook,
    datagenre: state.getGenre,
    datastatus: state.getStatus,
    datatitle: state.getTitle,
    dataCategories :state.getCategories //namaProps (terserah): state.nama file di reducer folder yang di import dari index.js
  };
};
export default connect(mapStateToProps)(Home); // menggabungin redux
