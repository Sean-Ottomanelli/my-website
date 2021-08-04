import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";


export default class AboutMe extends Component {

    constructor() {
        super()
        
        }

       
    render() {
        return (
          <div>
            <h3 className = "sectionHeader">About Me</h3>
            <p>
                I am a full stack web developer with an M.S. in mechanical engineering and a passion for clean, clear, intuitive design.
            </p>
            <p> 
                Have a look around my website to learn more about me, my interests, my work, and of course my dog, Jasmine Samoyed.
            </p>
          </div>
            
        )
    }
}