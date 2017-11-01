import React from "react";

export class TestDecomposition extends React.Component {

    i = 0;

    testIfStringAndAddToItems(obj) {
        let items = [];

        for(let k in obj){
            let val = obj[k];
            if(typeof val === "string" || typeof val === "number"){
                items.push(<li key={this.i++}>{k + " " + val}</li>)
            }else{
                let subitems = this.testIfStringAndAddToItems(val);
                items.push(
                    <li key={this.i++}>{k}:
                        <ul>
                            {subitems}
                        </ul>
                    </li>
                )
            }
        }
        return items;
    }

    render() {
        let items = this.testIfStringAndAddToItems(this.props);

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