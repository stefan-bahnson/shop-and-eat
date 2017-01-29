import React, { Component } from 'react';
import { connect } from 'react-redux-meteor';
import { get } from 'axios';

class Products extends Component {

  constructor() {
    super();
    this.state = {
      selected: null,
      products: []
    }
  }

  componentDidMount() {
    get('https://suparkassen-api.herokuapp.com/api/products')
      .then((res) => {
        this.setState({ products: res.data });
      })
      .catch((err) => console.error(err))
  }

  renderProducts(products) {
    return products.map((product, i) => (
      <div className={ this.state.selected === i ? 'product active' : 'product'}
           key={i}
           onClick={() => this.setState({ selected: i })}>
        <h3>{ product.name }</h3>
        <p>{  product.description }</p>
      </div>
    ))
  }

  render() {
    const { products } = this.state;

    return (
      <div className="products">
        <h1>Products</h1>
        { this.renderProducts(products) }
      </div>
    );
  }
}

export default Products;