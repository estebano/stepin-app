import React from "react";
import {Clock} from "./clock";
import {Toggle} from "./toggle"
import {GuestGreeting} from "./guest-greeting";
import {generateUUID} from "../utils/generals";

export class App extends React.Component {
    render() {
        let toggles = [];

        for (var i = 0; i < 54; i++) {
            toggles.push(<Toggle key={generateUUID()} />);
        }

        return (
            <div>
                <GuestGreeting />
                <h1>Togglery</h1>
                {toggles}
                <Clock />
            </div>
        );
    }
}