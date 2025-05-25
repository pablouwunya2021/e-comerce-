// src/components/CartButton.jsx
import React from "react";

function CartButton({ icon, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "relative",
        backgroundColor: "#FFD700", // amarillo
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
      title="Ver carrito"
    >
      {icon}
    </button>
  );
}

export default CartButton;
