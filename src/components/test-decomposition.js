import React from "react";

export class TestDecomposition extends React.Component {

    constructor(props) {
        super(props);
        console.log(`Props decomposition: ${props}`);
    }

    render() {
        let items = [];
        let i = 0;
        for (var key in this.props) {
            items.push(<li key={i++}>{key + " " + this.props[key]}</li>);
        }
        return (
            <div>
                <h2>Test dekompozycji:</h2>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}