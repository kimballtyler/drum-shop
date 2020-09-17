import React from 'react';

function CartSummaryItem(props) {
  const item = props.item;
  return (
    <div className="col-10 d-flex align-items-stretch">
      <div className="card">
        <div className="col-3 inline-block">
          <img height="200" src={item.image} className="product-image" alt={item.name} />
        </div>
        <div className="col-6 inline-block">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text"><small className="text-secondary">${props.dollars}.{props.cents}</small></p>
          <p className="card-text">{item.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default CartSummaryItem;
