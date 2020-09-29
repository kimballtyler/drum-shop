import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => this.setState(state => ({ products: data })));
  }

  render() {
    return (
      <div className="container">
        <div className="text-center mb-3">
          <iframe width="100%" height="400px" src="https://www.youtube.com/embed/KTBrSa5S6qI?autoplay=1&mute=1&loop=1&playlist=KTBrSa5S6qI" frameBorder="0"></iframe>
        </div>
        <div className="card-deck">
          {
            this.state.products.map(product => {
              return (
                <ProductListItem setView={this.props.setView} key={product.productId} product={product} />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default ProductList;
