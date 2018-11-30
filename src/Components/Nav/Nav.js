import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Nav">
        <img
          className="logo-img"
          src="http://www.babystepshawaii.org/images/BABY%20STEPS%20LOGO.jpg"
        />
        <div className="nav-links">
          <h2 className="link">About Us</h2>
          <h2 className="link">Families</h2>
          <h2 className="link">Practitioners</h2>
          <h2 className="link">Community</h2>
          <h2 className="link">Photo Gallery</h2>
        </div>
      </div>
    );
  }
}

export default Nav;
