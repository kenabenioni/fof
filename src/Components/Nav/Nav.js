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
          className="logo"
          src="http://www.babystepshawaii.org/images/BABY%20STEPS%20LOGO.jpg"
        />
        <div className="nav-links">
          <h2>About Us</h2>
          <h2>Families</h2>
          <h2>Practitioners</h2>
          <h2>Community</h2>
          <h2>Photo Gallery</h2>
        </div>
        <div className="nav-quote">
        <h4>"Baby STEPS is committed to helping all keiki on Hawaii Island to be healthy, happy, and to thrive by supporting families, strengthening practitioners and engaging communities."</h4>
        </div>
        <div className="earlychildhood">
        <h1>Early Childhood</h1>
        <h2>Play and Learn Group</h2>
        <h2>Book Bag Project</h2>
        <h2>Step Up To Kindergarden</h2>
        <h2>Past Projects</h2>
        </div>
      </div>
    );
  }
}

export default Nav;
