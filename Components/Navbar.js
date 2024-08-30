import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons"; 
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-primary ">
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bold" href="#">
            FASHION
          </a>
        </div>
        <div className=" collapse navbar-collapse ">
          <ul className="navbar-nav d-flex justify-content-center mb-lg-0 ">
            <li className="navbar-item ">
              <a href="/.Home" className="nav-link  text-white">
                Home
              </a>
            </li>
            <li className="navbar-item ">
               <a href="/.Product" className="nav-link text-white ">
                 Products
               </a>
            </li>
            <li className="navbar-item ">
               <a href="/.About" className="nav-link text-white">
                 About
              </a>
            </li>
          </ul>
          </div >
          <div className="collapse navbar-collapse" >
             <ul className="navbar-nav  d-flex justify-content-center flex-direction-end mb-lg-0 ">
                <li className="navbar-item ">
                  <a href="/.Login" className="nav-link text-white">
                  <FontAwesomeIcon icon={faSignInAlt} />Login
                  </a>
                </li>
                <li className="navbar-item ">
                  <a href="/.Register" className="nav-link text-white">
                  <FontAwesomeIcon icon={ faUserPlus} />Register
                  </a>
                </li>
              </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
