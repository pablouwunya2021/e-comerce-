import React from 'react';
import { useCart } from '../context/CartContext'; // ajusta la ruta si es diferente

const ClearCartButton = () => {
  const { clearCart } = useCart();

  const handleClearCart = () => {
    if (window.confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
      clearCart();
    }
  };

  return (
    <button
      onClick={handleClearCart}
      style={{
        padding: '10px 20px',
        backgroundColor: '#ff4d4f',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px'
      }}
    >
      🗑️ Vaciar carrito
    </button>
  );
};

export default ClearCartButton;
