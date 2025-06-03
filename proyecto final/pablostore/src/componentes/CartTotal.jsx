import React from 'react';

const CartTotal = ({ total }) => (
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
    {total >= 999 && (
      <p style={{ color: "red", fontWeight: "bold", marginTop: "1rem" }}>
        ❌ Límite alcanzado: No puedes agregar más productos.
      </p>
    )}
  </div>
);

export default CartTotal;
