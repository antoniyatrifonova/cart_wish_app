import React, { useState, useEffect } from "react";
import "./ProductsList.css";
import ProductCard from "./ProductCard";
import apiClient from "../../utils/api-client";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useSearchParams } from "react-router-dom";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [error, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  const [search, setSearch] = useSearchParams();
  const category = search.get("category");

  useEffect(
    () => {
      setIsLoading(true);
      apiClient
        .get("/products", { params: { category } })
        .then((res) => {
          setProducts(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setErrors(err.message);
          setIsLoading(false);
        });
    },
    [category] ? [category] : []
  );

  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>Products</h2>
        <select name="sort" className="product_sorting">
          <option value="">Relevance</option>
          <option value="price desc">Price HIGH to LOW</option>
          <option value="price asc">Price LOW to HIGH</option>
          <option value="rate desc">Rate HIGH to LOW</option>
          <option value="rate asc">Rate LOW to HIGH</option>
        </select>
      </header>

      <div className="products_list">
        {error && <em className="form_error">{error}</em>}
        {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.images[0]}
            price={product.price}
            title={product.title}
            rating={product.rating}
            ratingCounts={product.ratingCounts}
            stock={product.stock}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
