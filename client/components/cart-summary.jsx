import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  const cartTotal = props.cart.reduce((acc, cur) => acc + cur.price, 0).toString();
  let dollars, cents;
  if (cartTotal.length === 3) {
    dollars = cartTotal.substr(0, 1);
    cents = cartTotal.substr(-2);
  } else {
    dollars = cartTotal.slice(0, -2);
    cents = cartTotal.substr(-2);
  }
  if (props.cart.length === 0) {
    return (
      <div>
        <h1>My Cart</h1>
        <p>There are no items in your cart</p>
      </div>
    );
  }
  return (
    <div className="container mt-5">
      <a onClick={() => props.setView('catalog', {})} className="text-muted pl-4 mb-4 back-to-catalog">&lt; Back to catalog</a>
      <h1>My Cart</h1>
      <div className="card-deck">
        {
          props.cart.map(item => {
            return (
              <CartSummaryItem dollars={dollars} cents={cents} key={item.cartItemId} item={item} />
            );
          })
        }
      </div>
      <p>{`Item Total $${dollars}.${cents}`}</p>
    </div>
  );
}

export default CartSummary;
