import React, { Component } from "react";


export default class Jasmine extends Component {

    constructor() {
        super()
        
        }

       

    render() {
        return (
          <div>
            <h3 className = "sectionHeader">Jasmine</h3>
            <p>
                Jasmine is my dog. You'll love her.
            </p>
            <p>
                More coming soon but for now here's her instagram:
            </p>
            <a href="https://www.instagram.com/jasmine.samoyed/?hl=en" target="_blank">
              <ion-icon style={{color:'black'}} size="large" name="logo-instagram"></ion-icon>
            </a>
          </div>
            
        )
    }
}