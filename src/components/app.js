import React from "react";
import { Clock } from "./clock";
import { Toggle } from "./toggle"
//import { GuestGreeting } from "./guest-greeting";
import { Greeting } from "./greeting";
import { generateUUID } from "../utils/generals";
import { TestDecomposition } from "./test-decomposition";
import mock from '../data/mock';
import FilterableProductTable from "./filterable-product-data";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.state = {
            isLoggedIn: false,
            loginName: undefined
        };
    }

    onLoginChange = function(loginName){
        let isLoggedIn = loginName !== undefined;
        this.setState({
            loginName,
            isLoggedIn
        });
    }

    render() {
        let toggles = [];

        for (var i = 0; i < 4; i++) {
            toggles.push(<Toggle key={generateUUID()} />);
        }

        let decompo = {
            id: 1,
            name: "Hello decompo!",
            assoc: {
                some: "text"
            }
        };

        return (
            <div>
                <div className="pan lg">
                    <Greeting isLoggedIn={this.state.isLoggedIn} loginName={this.state.loginName} onLoginChange={this.onLoginChange} />
                    <h1>Togglery</h1>
                    {toggles}
                    <Clock />
                    <TestDecomposition {...decompo} />
                </div>
                <div className="pan lb">
                    <FilterableProductTable data={mock} />
                </div>
            </div>
        );
    }
}