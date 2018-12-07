import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Nav">
      <Link to={"/"}>
        <img
          className="logo-img"
          src="http://www.babystepshawaii.org/images/BABY%20STEPS%20LOGO.jpg"
        />
      </Link>
        <div className="nav-links">
        <Link to={"/about"}>
          <h2 className="link">About Us</h2>
        </Link>
        <Link to={"/families"}>
          <h2 className="link">Families</h2>
        </Link>
          <h2 className="link">Practitioners</h2>
          <h2 className="link">Community</h2>
          <h2 className="link">Photo Gallery</h2>
        </div>
      </div>
    );
  }
}

export default Nav;
