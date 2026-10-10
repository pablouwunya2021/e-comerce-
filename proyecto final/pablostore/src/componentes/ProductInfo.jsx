const ProductInfo = ({ producto, precioFinal }) => (
  <div className="product-info">
    <h2>{producto.nombre}</h2>
    <p className="descripcion">{producto.descripcion}</p>
    <p><strong>Categoría:</strong> {producto.categoria}</p>
    {producto.descuento ? (
      <p>
        <strong>Precio: </strong>
        <span style={{ color: '#d62828', fontSize: '1.1rem' }}>${precioFinal}</span>
        <span style={{ textDecoration: 'line-through', marginLeft: '0.5rem', color: '#888' }}>
          ${producto.precio.toFixed(2)}
        </span>
        <span style={{ marginLeft: '0.5rem', color: '#2a9d8f', fontWeight: 'bold' }}>
          −{producto.descuento}%
        </span>
      </p>
    ) : (
      <p><strong>Precio:</strong> ${producto.precio.toFixed(2)}</p>
    )}
  </div>
);

export default ProductInfo;
