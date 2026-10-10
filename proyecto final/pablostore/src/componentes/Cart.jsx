import React from 'react';
import './Cart.css';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, total } = useCart();

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Carrito de Compras</h2>

      {cartItems.length === 0 ? (
        <p className="empty" style={{ textAlign: "center", marginTop: "2rem" }}>
          Tu carrito está vacío.
        </p>
      ) : (
        <div 
          className="cart-container"
          style={{
            backgroundColor: "#ffe2e2",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
            borderRadius: "12px",
            padding: "1.5rem",
            display: "flex",
            gap: "2rem",
            maxWidth: "1100px",
            margin: "0 auto"
          }}
        >
          <div className="cart-items" style={{ flex: 3, overflowY: "auto", maxHeight: "70vh" }}>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-card">
                <img src={item.img} alt={item.nombre} className="cart-image" />
                <div className="cart-details">
                  <h3>{item.nombre}</h3>
                  <p className="description">{item.descripcion}</p>
                  <p><strong>Categoría:</strong> {item.categoria}</p>
                  <p className="price">Precio: ${item.precio.toFixed(2)}</p>
                  <p><strong>Cantidad:</strong> {item.cantidad}</p>
                </div>
              </div>
            ))}
          </div>

          <div 
            className="cart-total-container" 
            style={{
              flex: 1,
              borderLeft: "2px solid #eee",
              backgroundColor: "#fef0f0",
              paddingLeft: "1.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <h3>Total: ${total.toFixed(2)}</h3>
            {/* Puedes agregar botones aquí */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

