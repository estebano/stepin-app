import React from 'react';

export class SearchBar extends React.Component {

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        return (
            <form>
                <input type="text" placeholder="Szukaj..." value={filterText} />
                <p>
                    <input type="checkbox" value={inStockOnly} />
                    {' '}
                    Pokaż tylko produkty w magazynie
                </p>
            </form>
        );
    }
}