import React, { Component } from "react";
import "./Practitioners.css";

class Practitioners extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Practitioners">
        <div className="prac-title">
          Professional Development for Practitioners
        </div>
        <div className="prac-sections-wrap">
          <div className="prac-sections">
            <img src="http://babystepshawaii.org/images/conf%20pic%203%202010.JPG" />
            <h4>
            Annual Hawaii Island Early Childhood Conference (HIECC) provides workshops and speakers on current ECE issues. Providers from all over the island attend to celebrate achievements, network with colleagues and leave with new information, techniques and strategies to use in their work with young children. About 400 participants attended in 2012, 
including several participants from other islands.
            </h4>
          </div>
          <div className="prac-sections">
            <h4>
            Distance Learning Program is offered through a partnership with Concordia University, St. Paul. Three local residencies have been held for four cohorts of degree seeking students. This program is done completely online after the residency. To date, 15 BA degrees in Child Development and Family Life Education (FLE) and 26 MA degrees in ECE and FLE have been awarded.
            </h4>
            <img src="http://babystepshawaii.org/images/concgrads.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Practitioners;
