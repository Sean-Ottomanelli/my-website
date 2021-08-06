import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";


export default class Header extends Component {

    constructor() {
        super()
        
        }

       
    render() {
        return (
            <div>
                <div className = "topStripe"></div>
                <div className = "headerMainDiv">
                    <div className = "titleDiv">
                        <Link to="/my-website" className = "titleText">
                            <h3>Sean Ottomanelli</h3>
                        </Link>
                    </div>
                    
                    <div className = "headerNavOptionsDiv">
                        {/* <Link to="/jasmine">
                            <h3>Jasmine</h3>
                        </Link>

                        <Link to="/art">
                            <h3>Art</h3>
                        </Link> */}

                        <Link to="/projects" className = "navOptionText">
                            <h3>Projects</h3>
                        </Link>
                    </div>
                </div>
                <div className = "bottomStripe"></div>
          </div>
            
        )
    }
}