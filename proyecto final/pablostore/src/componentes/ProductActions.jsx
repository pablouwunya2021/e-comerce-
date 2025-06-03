const ProductActions = ({
  producto, quantity, handleDecrement, handleIncrement,
  handleAddToCart, addedToCart, favorites, toggleFavorite
}) => (
  <>
    <div className="quantity-controls">
      <button onClick={handleDecrement}>−</button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>+</button>
    </div>

    <div className="action-buttons">
      <button className="add-to-cart" onClick={handleAddToCart} disabled={addedToCart}>
        {addedToCart ? "Añadido al carrito" : "Añadir al carrito"}
      </button>
      <button
        className={`favorite-btn ${favorites.includes(producto.id) ? 'favorito' : ''}`}
        onClick={() => toggleFavorite(producto.id)}
      >
        {favorites.includes(producto.id) ? '★ Favorito' : '☆ Marcar como favorito'}
      </button>
    </div>
  </>
);

export default ProductActions;
