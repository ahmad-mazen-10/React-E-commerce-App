import React from "react";
import { Link } from 'react-router-dom'; 
import "./Navbar.css";
import logo from '../logo.jpg'


function Navbar() {
  return (
    // <React.Fragment>
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex p-2  ">
        <a className="navbar-brand" href="/#">
          <img src={logo} alt="Your logo" className="navbar-brand" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
                {/* <span className="sr-only">(current)</span> */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
    // {/* </React.Fragment> */}
  );
}

export default Navbar;
