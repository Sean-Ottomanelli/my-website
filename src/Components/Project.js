import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";


export default class Project extends Component {

    constructor() {
        super()
        
        }

       
    render() {
        return (
          <div className = "projectComponentDiv">
            <div className = "projectInformationDiv">
                <h3 className = "projectTitle">{this.props.title}</h3>
                <p>{this.props.description}</p>
                <p>Frontend: {this.props.frontend}</p>
                <p>Backend: {this.props.backend}</p>
            </div>
            <div className = "projectVideoDiv">
                <iframe 
                    src={this.props.src} 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen 
                    title={this.props.title}>
                </iframe>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
          </div>
            
        )
    }
}
