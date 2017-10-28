import React from "react";
import { GuestGreeting } from "./guest-greeting";

export class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.onLoginChange = this.onLoginChange.bind(this);
    }

    onLoginChange = function (loginName){
        this.props.onLoginChange(loginName);
    }

    render() {
        let i = this.props.isLoggedIn;
        if (i) {
            return <div>Witaj {this.props.loginName}! :)</div>;
        } else {
            return <GuestGreeting onLoginChange={this.onLoginChange} />
        }
    }
}