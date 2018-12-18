import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

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
                src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/47432783_1912776392121337_2367629017164546048_o.jpg?_nc_cat=102&_nc_ht=scontent-lax3-1.xx&oh=d02a7cd9eb47762cfba0b74b9baa0da5&oe=5C99F851"
                className="section-img"
                />
              <h4>Play and Learn Group</h4>
              <p>Fill in text here.</p>
            </div>
          </Link>
            <div className="section">
              <img
                src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/47360238_1912776628787980_3525079143878230016_o.jpg?_nc_cat=106&_nc_ht=scontent-lax3-2.xx&oh=0e0c1e3fe12a27b67e474a0393351844&oe=5CA27601"
                className="section-img"
              />
              <h4>Book Bag Project</h4>
              <p>Fill in text here.</p>
            </div>
            <div className="section">
              <img
                src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/47377773_1912776658787977_528186616976506880_o.jpg?_nc_cat=104&_nc_ht=scontent-lax3-1.xx&oh=b9def937605153747d1e83d2089e1098&oe=5C9C9123"
                className="section-img"
              />
              <h4>Step Up To Kindergarden</h4>
              <p>Fill in text here.</p>
            </div>
            <div className="section">
              <img
                src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/47394695_1912776468787996_1977421583236464640_o.jpg?_nc_cat=108&_nc_ht=scontent-lax3-1.xx&oh=fca044bdf4476484c8a8e05fa0605e0e&oe=5C688FC6"
                className="section-img"
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
                src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/47286845_1912776542121322_707258904651759616_o.jpg?_nc_cat=105&_nc_ht=scontent-lax3-1.xx&oh=57242b4d7665d527c35fe6c916945260&oe=5C65E714"
                className="section-img"
              />
              <h4>Waimea Elem. School</h4>
              <p>Fill in text here.</p>
            </div>
            <div className="section">
              <img
                src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/47322327_1912776352121341_7812218883456106496_o.jpg?_nc_cat=102&_nc_ht=scontent-lax3-1.xx&oh=e073593aa96b6cedd1351598ef45ee09&oe=5CA7B924"
                className="section-img"
              />
              <h4>Waimea Middle School</h4>
              <p>Fill in text here.</p>
            </div>
            <div className="section">
              <img
                src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/47389732_1912776408788002_2187233222432129024_o.jpg?_nc_cat=108&_nc_ht=scontent-lax3-1.xx&oh=78cad834cf2ef40ed1b73186e43a1869&oe=5CB05C98"
                className="section-img"
              />
              <h4>Paauilo Elem. and Inter.</h4>
              <p>Fill in text here.</p>
            </div>
            <div className="section">
              <img
                src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/47322302_1912776692121307_8916212721922342912_o.jpg?_nc_cat=103&_nc_ht=scontent-lax3-1.xx&oh=82d9c4da7c1c436f79ef61217249af31&oe=5CA2D335"
                className="section-img"
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
