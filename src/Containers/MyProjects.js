import React, { Component } from "react";
import Project from "../Components/Project";


export default class MyProjects extends Component {

    constructor() {
        super()
        
        }

       
    render() {
        return (
          <div>
            <div>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
            <div>
                <Project 
                    title = "TRIP PLANNER" 
                    src="https://player.vimeo.com/video/583029743?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    description = "Travel-centric wish-list web app that stores itinerary items on a MapBox world map.
                    Itinerary items (markers) can be organized into trips and trips can be split into day-trips.
                    Day-trips are optimized for maximum efficiency based on marker location and proximity to other markers using K-means clustering. 
                    App utilizes JWT authorization to encrypt user login information."
                    frontend = "React"
                    backend = "Ruby on Rails"/>
                <Project 
                    title = "Crea-Hitch-Ure" 
                    src="https://player.vimeo.com/video/583028869?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    description = "Desktop Zip-Car app for creatures instead of cars. 
                    User enters predicted distance and duration and selects a creature to book. 
                    App simulates ride based on user input and generates a price. 
                    All rides are saved to user's account.
                    App utilizes JWT authorization to encrypt user login information."
                    frontend = "React"
                    backend = "Ruby on Rails"/>
                <Project 
                    title = "Hummingbird" 
                    src="https://player.vimeo.com/video/583032637?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    description = "Hummed song multiple choice party guessing game.
                    To start a round one player selects a song from a list of four options and hums the tune for the other players.
                    Other players the hummed song.
                    When the song is correctly guessed, the player who guessed correctly is awarded points and the hummer role is passed.
                    A new round begins.
                    The app uses a database of over 6,000 songs. 
                    Players can select what songs are presented based on decade."
                    frontend = "React"
                    backend = "Ruby"/>
                <Project 
                    title = "App-Tique Visuelle" 
                    src="https://player.vimeo.com/video/583027256?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    description = "Mock eye-wear retail website. 
                    Users can browse items, filter and sort for different attributes, comment on items, and add items to cart.
                    Users with more than one item in their cart can narrow their selection down using the 'Compare Opticals' feature."
                    frontend = "React"
                    backend = "JSON server"/>
            </div>
          </div>
            
        )
    }
}