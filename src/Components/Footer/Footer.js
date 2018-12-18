import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Footer">
        <div className="footer-links">
          <h4>About Us</h4>
          <h4>Families</h4>
          <h4>Practitioners</h4>
          <h4>Community</h4>
          <h4>Photo Gallery</h4>
        </div>
        <div className="copyright">
          <h4>©2018 Baby Steps Hawaii</h4>
        </div>
      </div>
    );
  }
}

export default Footer;
