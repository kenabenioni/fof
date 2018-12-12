import React, { Component } from 'react';
import "./Photo.css";

class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Photo">
            <img src="http://babystepshawaii.org/photo%20album/2017/photo%20album%202017.jpg"/>
            </div>
        );
    }
}
 
export default Photo;