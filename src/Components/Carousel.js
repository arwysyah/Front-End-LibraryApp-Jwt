import React from 'react';
import CardCarousel from './Card';
import M from "materialize-css";
import './Carousel.css'
import {connect} from 'react-redux'
import {getBook} from './Redux/Actions/books'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      data: [],
      // show : false,
    };
  }
  async componentDidMount() {
    console.log('didmount')
    
    
    await this.props.dispatch (getBook())
this.setState({
  data : this.props.data.bookData
})

M.AutoInit();

  }

  render(){
    return (
        <div className='carousel' id='myCarousel'>
      {this.state.data.map((book, index) => {
        return (
          <CardCarousel
            alt={book.tittle.trim()}
            id ={index}
            key={index}
            author={book.author}
            title={book.tittle}
            img={book.image_url}
          />
        );
      })}
    </div>
    )}
}
const mapStateToProps = state =>{
  return{
    data : state.getBooks
  }
}
export default connect (mapStateToProps)(Carousel)