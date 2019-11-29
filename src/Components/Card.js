import React from "react";
import "./Carousel.css";
import { Link } from "react-router-dom";

const CardCarousel = props => {
  const { img, alt, title, author, to } = props;
  return (
    <div
      className="card carousel-item carousel-card z-depth-5"
      style={{ borderRadius: "12px" }}
    >
     
      <div className="card-image ">
      <Link to ={to}>
        <img className="custom-card-img" src={img} alt={alt} />
        </Link>
        <div className="card-title custom-title ">
     
            <div className="title-text-carousel white-text">{title}</div>
         

          <span style={{ fontWeight: "lighter" }}>{author}</span>
        </div>
      </div>
    </div>
  );
};
export default CardCarousel;
