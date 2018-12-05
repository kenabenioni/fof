import React, { Component } from 'react'
import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Footer">
            <h4>Baby Steps to Stronger Big Island Families</h4>
            <h4>P.O Box 6376 Kamuela, HI 96743</h4>
            <h4>808-887-1228</h4>
            <h4>info@BabySTEPShawaii.org</h4>
            </div>
        );
    }
}
 
export default Footer;