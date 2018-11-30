import React, { Component } from "react";
import "./Home.css";
import banner from '../../fof-img/DSC_0180-4.jpg';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Home">
        {/* <div className="home-quote">
          <h3>
            "Baby STEPS is committed to helping all keiki on Hawaii Island to be
            healthy, happy, and to thrive by supporting families, strengthening
            practitioners and engaging communities."
          </h3>
        </div>
        <div className="early-childhood">
          <h1>Early Childhood</h1>
          <h2>Play and Learn Group</h2>
          <h2>Book Bag Project</h2>
          <h2>Step Up To Kindergarden</h2>
          <h2>Past Projects</h2>
        </div>
        <div className="summer-programs">
          <h1>After School & Summer Programs</h1>
          <h2>Waimea Elem. School</h2>
          <h2>Waimea Middle School</h2>
          <h2>Paauilo Elem. and Inter.</h2>
          <h2>Honokaa High and Inter.</h2>
          <img
            className="beyond-img"
            src="https://origin.ih.constantcontact.com/fs026/1102647721560/img/220.jpg"
          />
        </div> */}
        <div className="banner-wrapper">
        <img src={banner} className="home-banner"/>
        <div className="banner-quote">
            <p>Quote Here</p>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
