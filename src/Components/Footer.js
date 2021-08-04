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
                <div className="footerContent">
                    <h3>Footer</h3>
                </div>
            </div>
            
        )
    }
}