import React, { Component } from "react";
import "./Home.css";
import banner from "../../fof-img/DSC_0180-4.jpg";
import play from "../../fof-img/DSC_0094.jpg";
import book from "../../fof-img/DSC_0242.jpg";
import step from "../../fof-img/DSC_0291.jpg";
import past from "../../fof-img/DSC_0107.jpg";
import waimeaElem from "../../fof-img/DSC_0240.jpg";
import waimeaMid from "../../fof-img/DSC_0046 (2).jpg";
import paauilo from "../../fof-img/DSC_0006-2.jpg";
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
        <div className="banner">
          <img src={banner} className="banner-img" />
        </div>
        <div className="early">
          <h2 className="early-title">EARLY CHILDHOOD</h2>
          <div className="early-links">
            <div className="section">
            <img src={play} className="section-img"/>
              <h4>Play and Learn Group</h4>
              <p>Fill in text here.</p>
            </div>
            <div className="section">
            <img src={book} className="section-img"/>
              <h4>Book Bag Project</h4>
              <p>Fill in text here.</p>
            </div>
            <div className="section">
            <img src={step} className="section-img"/>
              <h4>Step Up To Kindergarden</h4>
              <p>Fill in text here.</p>
            </div>
            <div className="section">
            <img src={past} className="section-img"/>
              <h4>Past Projects</h4>
              <p>Fill in text here.</p>
            </div>
          </div>
        </div>
        <div className="programs">
        <h2 className="programs-title">AFTER SCHOOL & SUMMER PROGRAMS</h2>
        <div className="early-links">
            <div className="section">
            <img src={waimeaElem} className="section-img"/>
              <h4>Waimea Elem. School</h4>
              <p>Fill in text here.</p>
            </div>
            <div className="section">
            <img src={waimeaMid} className="section-img"/>
              <h4>Waimea Middle School</h4>
              <p>Fill in text here.</p>
            </div>
            <div className="section">
            <img src={paauilo} className="section-img"/>
              <h4>Paauilo Elem. and Inter.</h4>
              <p>Fill in text here.</p>
            </div>
            <div className="section">
            <img src={past} className="section-img"/>
              <h4>Honokaa High and Inter.</h4>
              <p>Fill in text here.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
