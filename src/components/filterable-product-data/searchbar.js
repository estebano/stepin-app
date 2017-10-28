import React from 'react';

export class SearchBar extends React.Component {

    render() {
        return (
            <form>
                <input type="text" placeholder="Szukaj..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    Pokaż tylko produkty w magazynie
                </p>
            </form>
        );
    }
}