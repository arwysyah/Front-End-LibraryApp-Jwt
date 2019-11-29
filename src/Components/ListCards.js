import React from 'react';
import './ListCard.css'
import {Link} from 'react-router-dom'
  



const ListCards = props => {
    const { img, alt, title,author }=props;
    return(
        <div
      className='row z-depth-5 col s12 m4'
      style={{ borderRadius: '12px' }}>
      <div className='card-image-listcard '>
        <Link to ={props.to}>
        <img className='custom-card-listcard' src={img} alt={alt} />
        </Link>
        
        <div className='card-title custom-title title-no-bg'>
          <div className='title-text-listcard'style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: 'ellipsis'}}>{title}</div>
          <div class="card-content" style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: 'ellipsis'}}
 >{author}
        </div>
          <span style={{ fontWeight: 'lighter' }}>{author}</span>
        </div>
      </div>
    </div>
    );
};
export default ListCards;
