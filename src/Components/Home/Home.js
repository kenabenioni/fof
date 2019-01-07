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
            src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/47395469_1912776502121326_2738442646526623744_o.jpg?_nc_cat=100&_nc_ht=scontent-lax3-1.xx&oh=14a75927b307b81a523129cf20da4dd7&oe=5C6443B1"
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
              <h4>Waimea Elem. School</h4>
              <p>Fill in text here.</p>
            </div>
            <div className="section">
              <img
                src={pastproj}
                className="section-img"
                id="changeimg"
              />
              <h4>Waimea Middle School</h4>
              <p>Fill in text here.</p>
            </div>
            <div className="section">
              <img
                src={paauilo}
                className="section-img"
                id="changeimg"
              />
              <h4>Paauilo Elem. and Inter.</h4>
              <p>Fill in text here.</p>
            </div>
            <div className="section">
              <img
                src={newban}
                className="section-img"
                id="changeimg"
              />
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
