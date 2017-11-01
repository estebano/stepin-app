import React from "react";

export class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false, someOther: false };

        // This binding is necessary to make `this` work in the callback
        //// this.handleClick = this.handleClick.bind(this);
    }

    componentWillUpdate(nextProps, nextState){
        if(this.state.isToggleOn !== nextState.isToggleOn){
            this.props.onChange({
                isToggleOn: nextState.isToggleOn,
                id: nextProps.id
            });
        }
    }

    handleClick = (e) => {
        e.preventDefault();
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