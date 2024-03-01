//category.js

import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { fetchListOfCategories } from "./categoryslice"
import { useSelector } from "react-redux"
import "./category.css"

const CategoryHomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
 
  useEffect(() => {
    dispatch(fetchListOfCategories());
  }, [dispatch]);

  return (
    <div className="container">
      
      <h1 className="heading">Browse By Category</h1>
      <div className="grid">
        {categories.map((category) => (
          <Link key={category.id} to={`/category/${category.category_type}`} className="category-link">
            <div key={category.id} className="category-container">
              <img
                src={category.image_url}
                alt={category.category_type}
                className="category-image"
              />
              <p className="category-name">{category.category_type}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryHomePage;