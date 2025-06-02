import React from "react";

const StarRating = ({ rating, onRatingChange }) => {
  const handleClick = (index) => {
    onRatingChange(index + 1); 
  };

  return (
    <div style={{ display: "flex", cursor: "pointer" }}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleClick(index)}
          style={{
            color: index < rating ? "#f5b301" : "#ccc",
            fontSize: "1.8rem",
            marginRight: "5px",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;

