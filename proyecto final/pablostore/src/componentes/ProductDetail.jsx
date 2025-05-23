import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/products.js";

function ProductDetail() {
  const { id } = useParams();
  const producto = products.find((p) => p.id === parseInt(id));

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div style={{ padding: "2rem", marginTop: "120px" }}>
      <h2>{producto.nombre}</h2>
      <img src={producto.img} alt={producto.nombre} style={{ width: "300px", borderRadius: "1rem" }} />
      <p style={{ marginTop: "1rem" }}>{producto.descripcion}</p>
      <h3 style={{ color: "#d33" }}>${producto.precio}</h3>
    </div>
  );
}

export default ProductDetail;
