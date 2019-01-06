import React, { Component } from "react";
import "./About.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="about-wrapper">
        <div className="ab-title">
          About Us
        </div>
      <div className="About">
        <div className="staff">
          <div className="members">
            <div className="person">
              <img
                src="http://babystepshawaii.org/images/Angela%20pic.jpg"
                className="staff-img"
              />
              <div className="person-section">
                <h5>Angela C. Thomas, MA Ed</h5>
                <h5>Program Leader</h5>
                <h5>athomas@BabySTEPShawaii.org</h5>
              </div>
            </div>
            <div className="person">
              <img
                src="http://babystepshawaii.org/images/Chelsea%20pic.jpg"
                className="staff-img"
              />
              <div className="person-section">
                <h5>Chelsea LaFrance</h5>
                <h5>Honokaa & Paauilo School site Coordinator</h5>
                <h5>clafrance@BabySTEPShawaii.org</h5>
              </div>
            </div>
            <div className="person">
              <img
                src="http://babystepshawaii.org/images/Hilda.jpg"
                className="staff-img"
              />
              <div className="person-section">
                <h5>Hilda Gonzales</h5>
                <h5>Waimea Elementary School Site Coordinator</h5>
                <h5>Play & Learn Group Coordinator</h5>
                <h5>hgonzales@BabySTEPShawaii.org</h5>
              </div>
            </div>
            <div className="person">
              <img
                src="http://babystepshawaii.org/images/Bernie%20pic.jpg"
                className="staff-img"
              />
              <div className="person-section">
                <h5>Bernie Marsh</h5>
                <h5>Waimea Middle School Site Coordinator</h5>
                <h5>bmarsh@BabySTEPShawaii.org</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="right-wrap">
          <div className="contact-us">
            <h1>Contact</h1>
            <hr />
            <div className="contact-info">
              <h5>Baby STEPS to Stronger Big Island Families</h5>
              <h5>P. O. Box 6376</h5>
              <h5>Kamuela, HI 96743</h5>
              <h5>808-887-1228</h5>
              <h5>info@BabySTEPShawaii.org</h5>
            </div>
          </div>
        <img  className="beyond-img" src="https://origin.ih.constantcontact.com/fs026/1102647721560/img/220.jpg"/>
        </div>
      </div>
      </div>
    );
  }
}

export default About;
