import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";


export default class Footer extends Component {

    constructor() {
        super()
        
        }

        
       
    render() {
        return (
            <div className = "footer">
                <div className = "footerTopStripe"></div>
                <div className = "footerBottomStripe"></div>
                <div className= "footerContent">

                    <a className="footer-social" href="https://www.linkedin.com/in/sean-ottomanelli/" target="_blank">
                        <ion-icon size="large" name="logo-linkedin"></ion-icon>
                    </a>

                    <a className="footer-social" href="https://github.com/Sean-Ottomanelli" target="_blank">
                        <ion-icon size="large" name="logo-github"></ion-icon>
                    </a>

                    <a className="footer-social" href="mailto:sean.ottomanelli@gmail.com" target="_blank">
                        <ion-icon size="large" name="mail-outline"></ion-icon>
                    </a>
              
                </div>
            </div>
            
        )
    }
}