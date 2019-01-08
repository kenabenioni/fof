import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import newban from '../../fof-img/IMG_1154.jpg';
import playgroup from '../../fof-img/playgroup.jpg';
import bookbag from '../../fof-img/IMG_4893.jpg';
import kindergarden from '../../fof-img/IMG_5074.jpg';
import pastproj from '../../fof-img/IMG_0832.JPG';
import waimeaElem from '../../fof-img/IMG_2824.JPG';
import paauilo from '../../fof-img/IMG_2811.JPG';
import waimeaEpdf from '../../fof-pdf/3rd quarter REGISTRATION FORM 2018-2019.2.pdf';
import waimeaMpdf from '../../fof-pdf/21st CLC-Registration Flyer - 3rd qtr. 18-19.pdf';
import paauilopdf from '../../fof-pdf/Q3 paauilo sy18.19 (1).pdf';
import honokaapdf from '../../fof-pdf/Q3 honokaa sy18.19.pdf';
import banban from '../../fof-img/IMG_6531.jpg';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Home">
        <div className="banner">
          <img
            src={banban}
            className="banner-img"
          />
          <h4 className="banner-quote">
            "Baby STEPS is committed to helping all keiki on Hawaii Island to be
            healthy, happy, and to thrive by supporting families, strengthening
            practitioners and engaging communities."
          </h4>
        </div>
        <div className="early">
          <h2 className="early-title">EARLY CHILDHOOD</h2>
          <div className="early-links">
          <Link to={"/playlearngroup"}>
            <div className="section">
              <img
                src={playgroup}
                className="section-img"
                />
              <h4>Play and Learn Group</h4>
              <p>Fill in text here.</p>
            </div>
          </Link>
            <div className="section">
              <img
                src={bookbag}
                className="section-img"
              />
              <h4>Book Bag Project</h4>
              <p>Fill in text here.</p>
            </div>
            <div className="section">
              <img
                src={kindergarden}
                className="section-img"
              />
              <h4>Step Up To Kindergarden</h4>
              <p>Fill in text here.</p>
            </div>
            <div className="section">
              <img
                src={pastproj}
                className="section-img"
                id="changeimg"
              />
              <h4>Past Projects</h4>
              <p>Fill in text here.</p>
            </div>
          </div>
        </div>
        <div className="programs">
          <h2 className="programs-title">AFTER SCHOOL & SUMMER PROGRAMS</h2>
          <div className="early-links">
            <div className="section">
              <img
                src={waimeaElem}
                className="section-img"
              />
              <a href = {waimeaEpdf} target = "_blank">Waimea Elem. School</a>
              <p>Fill in text here.</p>
            </div>
            <div className="section">
              <img
                src={pastproj}
                className="section-img"
                id="changeimg"
              />
              <a href = {waimeaMpdf} target = "_blank">Waimea Middle School</a>
              <p>Fill in text here.</p>
            </div>
            <div className="section">
              <img
                src={paauilo}
                className="section-img"
                id="changeimg"
              />
              <a href = {paauilopdf} target = "_blank">Paauilo Elem. and Inter.</a>
              <p>Fill in text here.</p>
            </div>
            <div className="section">
              <img
                src={newban}
                className="section-img"
                id="changeimg"
              />
              <a href = {honokaapdf} target = "_blank">Honokaa High and Inter.</a>
              <p>Fill in text here.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
