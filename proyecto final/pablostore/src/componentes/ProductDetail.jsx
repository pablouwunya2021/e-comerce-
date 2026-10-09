import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/products.js";

function ProductDetail() {
  const { id } = useParams();
  const producto = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const itemEnCarrito = useMemo(() => {
    return {
      id: producto?.id,
      nombre: producto?.nombre,
      precio: producto?.precio,
      cantidad: quantity,
      total: parseFloat((producto?.precio * quantity).toFixed(2)),
    };
  }, [producto, quantity]);

  const handleAddToCart = () => {
    const carrito = JSON.parse(localStorage.getItem("cart")) || [];

    // Verificar si el producto ya está en el carrito
    const indexExistente = carrito.findIndex(item => item.id === itemEnCarrito.id);

    if (indexExistente !== -1) {
      // Ya existe: actualizar cantidad y total
      carrito[indexExistente].cantidad += itemEnCarrito.cantidad;
      carrito[indexExistente].total = parseFloat(
        (carrito[indexExistente].cantidad * carrito[indexExistente].precio).toFixed(2)
      );
    } else {
      // No existe: agregar nuevo
      carrito.push(itemEnCarrito);
    }

    localStorage.setItem("cart", JSON.stringify(carrito));
    alert("Producto añadido al carrito");
  };

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div
      style={{
        backgroundColor: "#ffe6e6",
        padding: "2rem",
        borderRadius: "1.5rem",
        maxWidth: "1100px",
        margin: "3rem auto",
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={producto.img}
        alt={producto.nombre}
        style={{
          width: "250px",
          height: "250px",
          objectFit: "cover",
          borderRadius: "1rem",
        }}
      />
      <div>
        <h2 style={{ margin: 0, fontSize: "1.8rem", fontWeight: "600" }}>
          {producto.nombre}
        </h2>
        <p style={{ margin: "0.5rem 0", fontSize: "1rem", color: "#555" }}>
          {producto.descripcion}
        </p>
        <p style={{ fontWeight: "600", fontSize: "1.2rem", marginTop: "1rem" }}>
          Categoría: {producto.categoria}
        </p>
        <p style={{ fontWeight: "600", fontSize: "1.2rem", marginTop: "1rem" }}>
          Precio: ${producto.precio}
        </p>

        {/* Selector de cantidad */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          <button
            onClick={handleDecrement}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#ef476f",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            −
          </button>
          <span style={{ fontSize: "1.2rem" }}>{quantity}</span>
          <button
            onClick={handleIncrement}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#ef476f",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            +
          </button>
        </div>

        {/* Botón añadir al carrito */}
        <button
          onClick={handleAddToCart}
          style={{
            marginTop: "1.5rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#d62828",
            color: "white",
            border: "none",
            borderRadius: "0.75rem",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;

