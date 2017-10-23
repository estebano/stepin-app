import React from "react";
import { Clock } from "./clock";
import { Toggle } from "./toggle"
//import { GuestGreeting } from "./guest-greeting";
import {Greeting} from "./greeting";
import { generateUUID } from "../utils/generals";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    render() {
        let toggles = [];

        for (var i = 0; i < 27; i++) {
            toggles.push(<Toggle key={generateUUID()} />);
        }

        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                <h1>Togglery</h1>
                {toggles}
                <Clock />
            </div>
        );
    }
}