import React, { Component } from 'react';
import "./Community.css";

class Community extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Community">
                    <div className="com-title">
          Safety and Health for Children and Families
        </div>
        <div className="com-sections-wrap">
          <div className="com-sections">
            <img src="http://babystepshawaii.org/images/28x11%20bus%20sign.jpg" />
            <h4>
            Car Seat Safety week was conducted through a partnership with the County Department of Public Works to bring awareness to passenger safety for children. Brochures, bus banners, radio spots and car seats checks were part of the campaign. This will become an annual event coinciding with National Passenger Safety Week.
            </h4>
          </div>
          <div className="com-sections">
            <h4>
E Ho'opili Hou SKIP is a program whose goal is to prepare incarcerated parents for reunification with their families, especially their children. There have been 351 participants since the program began in 2009.
            </h4>
            <img src="http://babystepshawaii.org/images/SKIPdads.jpg" />
          </div>
          <div className="com-sections">
            <h4>
            Specialized Trainings for Parents and Practitioners including the Our Keiki, Our Kuleana workshops; Autism workshops; and Fetal Alcohol Syndrome workshops held across the state.
            </h4>
            <img src="http://babystepshawaii.org/images/autism2010pic2.JPG" />
          </div>
        </div>
            </div>
        );
    }
}
 
export default Community;