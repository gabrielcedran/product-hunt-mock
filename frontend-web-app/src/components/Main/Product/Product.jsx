import React, {Component} from 'react';

import api from '../../../services/api';

import './Product.css';

class Product extends Component {
  state= {
    product: {}
  }

  render() {
    const {product} = this.state;

    return (
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>URL: <a href={product.url}>{product.url}</a></p>
      </div>  
    );
  }

  async componentDidMount() {
    const {id} = this.props.match.params;

    const response = await api.get(`/products/${id}`);

    this.setState({product: response.data});
  }
}

export default Product;