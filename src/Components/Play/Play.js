import React, { Component } from 'react';
import "./Play.css";

class Play extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Play">
            <h1>Play and Learn Group</h1>
            <h3>Honokaa Complex 21st CCLC Enrichment Program located at Waimea Middle School room P11</h3>
            <h3>Next to the new STEAM building</h3>
            <h2>Monday through Friday 8:30 am - 11:00 am</h2>
            <h5>This pre-kindergarden program is for children 5 years old and under who do not have the opportunity to regularly attend preschool. Children can play, practice social skills, and participate in learning experiences while following simple rules and routines. This is a family engagement program - a parent or caregiver must be present at all times. Space is limited. Please call 808-987-1377 to register or email hgonzales@babystepshawaii.org.</h5>
            </div>
        );
    }
}
 
export default Play;