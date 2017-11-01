import React from 'react';
import { SearchBar } from './searchbar';
import { ProductTable } from './product-table';


export class FilterableProductTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {filterText: '', inStockOnly: false};
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
          filterText: filterText
        });
      }
      
      handleInStockChange(inStockOnly) {
        this.setState({
          inStockOnly: inStockOnly
        })
      }

    render() {
        let productsByCategory = this.props.data.sort((a,b)=>{
            return a.category > b.category;
        });

        return (
            <div>
                <SearchBar 
                    filterText={this.state.filterText} 
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange} />
                <ProductTable 
                    filterText={this.state.filterText} 
                    inStockOnly={this.state.inStockOnly}
                    products={productsByCategory} />
            </div>
        );
    }
}