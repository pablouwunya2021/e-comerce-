import StarRating from "./StarRating";

const ProductRating = ({ rating, setRating }) => (
  <div className="rating-section">
    <p><strong>Califica este producto:</strong></p>
    <StarRating rating={rating} onRatingChange={setRating} />
    <p className="current-rating">Calificación actual: {rating} estrellas</p>
  </div>
);

export default ProductRating;
