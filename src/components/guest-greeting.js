import React from "react";

export class GuestGreeting extends React.Component {

    txtLoginName = undefined;

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            loginName: undefined
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    componentDidUpdate(prevProps, prevState){
        this.props.onLoginChange(prevState.loginName);
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState((prevState, props) => ({ loginName: this.txtLoginName.value }));
    }

    render() {
        return (
            <div>
                <h1>Zaloguj się:</h1>
                <label>Wprowadź nazwę:</label>
                <input type="text" ref={(c) => this.txtLoginName = c} />
                <button type="button" onClick={this.onSubmit}>Zaloguj</button>
            </div>
        );
    }
}