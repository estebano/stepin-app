import React from "react";

export class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };

        // This binding is necessary to make `this` work in the callback
        //// this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        debugger;
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick} style={{
                padding: "0px 10px",
                margin: "2px 5px",
                background: this.state.isToggleOn ? "green" : "red",
                width: "60px"
            }}>
                {this.state.isToggleOn ? "On" : "Off"}
            </button>
        );
    }
}