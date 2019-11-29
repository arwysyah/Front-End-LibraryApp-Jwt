import React from 'react';
import {Link} from 'react-router-dom'
import './pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <ul className='pagination' style={{width:'100%' ,left:'45%'}}> 
        {pageNumbers.map(number => (
          <li key={number} 
          style={{margin:'center', float:"center"}}>
            <Link onClick={() => paginate(number)}  >
              {number}
            </Link>
          </li>
        ))}
      </ul>
  );
};

export default Pagination;