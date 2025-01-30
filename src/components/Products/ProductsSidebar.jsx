import React, { useState, useEffect } from "react";
import "./ProductsSidebar.css";
import LinkWithIcon from "./../Navbar/LinkWithIcon";
import apiClient from "../../utils/api-client";

function ProductsSidebar() {
  const [categories, setCategories] = useState([]);
  const [error, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get("/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => setErrors(err.message));
  }, []);

  return (
    <aside className="products_sidebar">
      <h2>Category</h2>

      <div className="category_links">
        {error && <em className="form_error">{error}</em>}
        {categories.map((category) => {
          return (
            <LinkWithIcon
              key={category.id}
              title={category.name}
              link={`/products?category=${category.name}`}
              emoji={category.image}
              sidebar={true}
            />
          );
        })}
      </div>
    </aside>
  );
}

export default ProductsSidebar;
