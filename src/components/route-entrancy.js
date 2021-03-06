import React from "react";
import { Clock } from "./clock";
import TogglerContainer from "./TogglerContainer";
//import { GuestGreeting } from "./guest-greeting";
import { Greeting } from "./greeting";
import { generateUUID } from "../utils/generals";
import { TestDecomposition } from "./test-decomposition";
import mock from '../data/mock';
import FilterableProductTable from "./filterable-product-data";
import { addTodo, removeTodo } from '../actions'
import VisibleTodoList, { Footer, AddTodoContainer } from './ToDoList';

class Entrancy extends React.Component {
    constructor(props) {
        super(props);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.state = {
            isLoggedIn: false,
            loginName: undefined
        };
    }

    onLoginChange = function (loginName) {
        let isLoggedIn = loginName !== undefined;
        this.setState({
            loginName,
            isLoggedIn
        });
    }

    render() {
        let toggles = [];

        for (var i = 0; i < 4; i++) {
            toggles.push(<TogglerContainer key={generateUUID()} onChange={this.onTogglerChange} id={generateUUID()} />);
        }

        let decompo = {
            id: 1,
            name: "Hello decompo!",
            assoc: {
                some: "text",
                some1: "other text",
                assoc1: {
                    some: "text",
                    some1: "text"
                }
            }
        };

        return (
            <div>
                <div className="pan lg">
                    {/* <Greeting isLoggedIn={this.state.isLoggedIn} loginName={this.state.loginName} onLoginChange={this.onLoginChange} /> */}
                    <h1>Togglery</h1>
                    {toggles}
                    <Clock />
                    <TestDecomposition {...decompo} />
                </div>
                <div className="pan lb">
                    <FilterableProductTable data={mock} />
                </div>
                <div className="pan lc">
                    <AddTodoContainer />
                    <VisibleTodoList />
                    <Footer />
                </div>
            </div>
        );
    }
}

export { Entrancy };