import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import MyProjects from "./Containers/MyProjects";
import AboutMe from "./Containers/AboutMe";
import MyArt from "./Containers/MyArt";
import Header from "./Components/Header";
import Jasmine from "./Containers/Jasmine";
import Footer from "./Components/Footer";


export default class App extends Component {

    constructor() {
        super()
        
        }

       
    render() {
        return (
          <div className = "stretchDiv">
            <Router>

              <Header/>

              <div className = "mainBodyDiv">
                <Switch>

                  <Route exact path="/my-website">
                      <AboutMe/>
                  </Route>

                  <Route exact path="/projects">
                      <MyProjects/>
                  </Route>

                  {/* <Route exact path="/art">
                      <MyArt/>
                  </Route>

                  <Route exact path="/jasmine">
                      <Jasmine/>
                  </Route> */}

                </Switch>
              </div>

              <Footer/>
            </Router>
          </div>
            
        )
    }
}