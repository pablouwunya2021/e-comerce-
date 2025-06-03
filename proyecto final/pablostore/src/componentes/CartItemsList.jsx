import React from 'react';
import CartItem from './CartItem';

const CartItemsList = ({ items, lastItemRef }) => (
  <div
    className="cart-items"
    style={{ flex: 3, overflowY: "auto", maxHeight: "70vh" }}
  >
    {items.map((item, index) => (
      <CartItem
        key={item.id}
        item={item}
        ref={index === items.length - 1 ? lastItemRef : null}
      />
    ))}
  </div>
);

export default CartItemsList;
