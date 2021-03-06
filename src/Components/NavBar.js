import React from "react";
import "./NavBar.css";
const NavBar = props => {
  return (
    <nav>
      <div className="nav-wrapper purple black">
        <a href="slide" data-target="slide-out" className="sidenav-trigger  ">
          <i className="material-icons black-text">menu</i>
        </a>

        <div>
          <ul>
          < a href ="#!">
            <img
              className="image-thumbn right height "
              src="https://image.flaticon.com/icons/svg/2169/2169566.svg"
              alt=""
            />
            </a>
          </ul>
        </div>
        <ul className="left hide-on-med-and-down">
          <li>
            <a href="sl">
              <i
                data-target="slide-out"
                className="material-icons sidenav-trigger left white-text" 
                style = {{borderBottom:"0px"}}
              >
                Menu
              </i>
            </a>
          </li>
          <li  >
            <div className="input-field col s8 white-text"  >
              <select
                onChange={props.handleCategories}
                style={{ textAlign: "center", color:"white" }}
              >
                <option value="" style ={{color:'blue'}}>AllCategories</option>
                <option value="1">Novel</option>
                <option value="2">Manga</option>
                <option value="3">Autobiography</option>
                <option value="4">Sciene</option>
                <option value="5">Fiction</option>
              </select>
            </div>
          </li>

          <li>{props.children}</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
