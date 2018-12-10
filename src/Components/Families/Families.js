import React, { Component } from 'react';
import './Families.css';

class Families extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Families">
                <div className="family-title">Support For Families</div>
                <div className="fam-sections-wrap">
                <div className="fam-sections">
                    <img src="http://babystepshawaii.org/images/BabyBasketDelivery0910.jpg" />
                    <h4>Parenting articles were published weekly in the North Hawaii News and monthly in the Hamakua Times. These articles cover parenting and child development topics.</h4>
                </div>
                <div className="fam-sections">
                    <h4>Newborn Baskets are distributed to parents in all island hospitals. Baskets contain a Snugli (baby carrier), a Resource directory, a first book for baby and other helpful items for families. Research shows that the use of a Snugli increases the rate of attachment which is "the keystone for ensuring children's sound mental health" (Honig, 1993). Over 5,000 baskets have been delivered island-wide.</h4>
                    <img src="http://babystepshawaii.org/images/basket.jpg" />
                </div>
                <div className="fam-sections">
                    <img src="http://babystepshawaii.org/images/resourcedirectory.jpg" />
                    <h4>Resource Directory for Hawaii Island provides parents and caregivers with an up‐to‐date list of family support resources. The directory is color‐coded and organized by district. The fourth revision, 2012 edition will be published soon.</h4>
                </div>
                </div>
            </div>
        );
    }
}
 
export default Families;