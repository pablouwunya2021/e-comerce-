const ProductImage = ({ producto }) => (
  <img src={producto.img} alt={producto.nombre} className="product-image" />
);

export default ProductImage;
