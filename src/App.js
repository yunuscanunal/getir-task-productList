import React, { Component } from 'react';
import './App.css';
import Products from "./components/Products";
import Filter from "./components/Filter";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filteredProducts: [], };
    this.handleChangeSort = this.handleChangeSort.bind(this);
    this.handlePro = this.handlePro.bind(this);
  }



  componentWillMount() {
    fetch("http://localhost:8000/products").then(res => res.json()).then(data => this.setState({
      products: data,
      filteredProducts: data
    }));
  }
  handleChangeSort(e) {
    this.setState({ sort: e.target.value });
    this.listProducts();
  }
  handlePro(e) {
    this.setState({ pro: e.target.value });
    this.listProducts();
  }
  listProducts() {
    this.setState(state => {
      if (state.sort === "Lowest") {
        state.products.sort((a, b) => (state.sort === "Lowest") ? (a.price > b.price ? 1 : -1) : a.price < b.price ? 1 : -1)
      } else if (state.sort === "Highest") {
        state.products.sort((a, b) => (a.added < b.added ? 1 : -1));

      } else if (state.sort === "Old") {
        state.products.sort((a, b) => (state.sort === "Old") ? (a.added > b.added ? 1 : -1) : a.added < b.added ? 1 : -1)
      } else if (state.sort === "New") {
        state.products.sort((a, b) => (a.added < b.added ? 1 : -1));
      } if (state.pro === "Shirt") {
        state.products.pro((a, b) => (state.pro === "Shirt") ? (a.manufacturer === "Shirt" & b.manufacturer === "Shirt") : (a.manufacturer === "Mug" & b.manufacturer === "Mug"))
      }
      return { filteredProducts: state.products };
    })
  }
  render() {
    return (
      <div className="container">
        <h1>Market</h1>
        <hr />
        <div className='row'>
          <div className='col-md-8'>
            <Filter brand={this.state.brand} pro={this.state.pro} sort={this.state.sort} handleBrand={this.handleBrand} handlePro={this.handlePro} handleChangeSort={this.handleChangeSort} count={this.state.filteredProducts.length} />
            <hr />
            <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
          </div>

          <div className='col-md-4'>

          </div>
        </div>
      </div>
    );
  }
}


export default App;
