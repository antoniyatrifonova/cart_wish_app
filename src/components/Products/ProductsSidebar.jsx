import React, { useState, useEffect } from "react";
import "./ProductsSidebar.css";
import LinkWithIcon from "./../Navbar/LinkWithIcon";
import useData from "./../../hooks/useData";

function ProductsSidebar() {
  const { data: categories, error } = useData("/categories");

  return (
    <aside className="products_sidebar">
      <h2>Category</h2>

      <div className="category_links">
        {error && <em className="form_error">{error}</em>}
        {categories &&
          categories.map((category) => {
            return (
              <LinkWithIcon
                key={category.id}
                id={category.id}
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
