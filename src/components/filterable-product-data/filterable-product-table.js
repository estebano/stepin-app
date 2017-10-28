import React from 'react';
import { SearchBar } from './searchbar';
import { ProductTable } from './product-table';


export class FilterableProductTable extends React.Component {
    render() {
        let productsByCategory = this.props.data.sort((a,b)=>{
            return a.category > b.category;
        });

        return (
            <div>
                <SearchBar />
                <ProductTable products={productsByCategory} />
            </div>
        );
    }
}