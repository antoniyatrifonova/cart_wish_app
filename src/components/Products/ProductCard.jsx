import React from "react";
import "./ProductCard.css";
import star from "../../assets/glowing-star.png";
import basket from "../../assets/basket.png";
import { NavLink } from "react-router-dom";

const ProductCard = ({
  id,
  image,
  price,
  title,
  rating,
  ratingCounts,
  stock,
}) => {
  return (
    <article className="product_card">
      <div className="product_image">
        <NavLink to={`/product/${id}`}>
          <img src={image} alt="product image" />
        </NavLink>
      </div>

      <div className="product_details">
        <h3 className="product_price">${price}</h3>
        <p className="product_title">{title}</p>
        <footer className="align_center product_info_footer">
          <div className="align_center">
            <p className="align_center product_rating">
              <img src={star} alt="star" />
              {rating}
            </p>
            <p className="product_review_count">{ratingCounts}</p>
          </div>
          {stock > 0 && (
            <button className="add_to_card">
              <img src={basket} alt="basket button" />
            </button>
          )}
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
