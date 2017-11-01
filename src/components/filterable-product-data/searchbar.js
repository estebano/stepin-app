import React from 'react';

export class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        return (
            <form>
                <input type="text" placeholder="Szukaj..." value={filterText} onChange={this.handleFilterTextChange} />
                <p>
                    <input type="checkbox" value={inStockOnly} onChange={this.handleInStockChange} />
                    {' '}
                    Pokaż tylko produkty w magazynie
                </p>
            </form>
        );
    }
}