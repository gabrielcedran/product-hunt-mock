import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import './Main.css';

class Main extends Component {

  state = {
    products: [],
    pagination: {}
  };

  prevPage = () => {
    const {page} = this.state.pagination;
    if (page > 1) {
      this.loadProducts(page-1);
    }
  }

  nextPage = () => {
    const {page, pages} = this.state.pagination;
    console.log(page, pages);
    if (page < pages) {
      this.loadProducts(page+1);
    }
  }
  
  
  render() {
    console.log(this.state.pagination.pages === this.state.pagination.page);
    return (
      <div className='product-list'>
        {this.state.products.map((product) => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <Link to={`/products/${product._id}`}>Acessar</Link>
          </article>
        ))}
        <div className="actions">
          <button disabled={this.state.pagination.page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={this.state.pagination.pages === this.state.pagination.page} onClick={this.nextPage}>Proximo</button>
        </div>
      </div>
    );
  }


  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    // Rest operation
    const {docs, ...pagination} = response.data;
    console.log(pagination);
    this.setState({products: docs, pagination });
  }
}

export default Main;