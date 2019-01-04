import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
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
        <Link to={"/practitioners"}>
          <h2 className="link">Practitioners</h2>
        </Link>
        <Link to={"/community"}>
          <h2 className="link">Community</h2>
        </Link>
        <Link to={"/photogallery"}>
          <h2 className="link">Photo Gallery</h2>
        </Link>
        </div>
        <div className="burger">
        <FontAwesomeIcon icon={faBars} size="lg" color="white"/>
        <div className="dropdown">
        <Link to={"/about"}>
          <h3>About Us</h3>
        </Link>
        <Link to={"/families"}>
          <h3>Families</h3>
        </Link>
        <Link to={"/practitioners"}>
          <h3>Practitioners</h3>
        </Link>
        <Link to={"/community"}>
          <h3>Community</h3>
        </Link>
        <Link to={"/photogallery"}>
          <h3>Photo Gallery</h3>
        </Link>
        </div>
        </div>
      </div>
    );
  }
}

export default Nav;
