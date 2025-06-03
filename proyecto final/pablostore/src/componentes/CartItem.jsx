import React from 'react';

const CartItem = React.forwardRef(({ item }, ref) => (
  <div ref={ref} className="cart-card">
    <img src={item.img} alt={item.nombre} className="cart-image" />
    <div className="cart-details">
      <h3>{item.nombre}</h3>
      <p className="description">{item.descripcion}</p>
      <p><strong>Categoría:</strong> {item.categoria}</p>
      <p className="price">Precio: ${item.precio.toFixed(2)}</p>
      <p><strong>Cantidad:</strong> {item.cantidad}</p>
    </div>
  </div>
));

export default CartItem;
