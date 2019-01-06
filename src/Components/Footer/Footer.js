import React, { Component } from "react";
import {Link} from 'react-router-dom';
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
        <Link to={"/about"}>
          <h4>About Us</h4>
        </Link>
        <Link to={"/families"}>
          <h4>Families</h4>
        </Link>
        <Link to={"/practitioners"}>
          <h4>Practitioners</h4>
        </Link>
        <Link to={"/community"}>
          <h4>Community</h4>
        </Link>
        <Link to={"/photogallery"}>
          <h4>Photo Gallery</h4>
        </Link>
        </div>
        <div className="copyright">
          <h4>©2018 Baby Steps Hawaii</h4>
        </div>
      </div>
    );
  }
}

export default Footer;
