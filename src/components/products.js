//product.js

import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { fetchListOfProducts } from "./productslice"
import Dashboard from "./dashboard"
import HomeScreen from "./Homescreen"
import './products.css'

const Productlist = () => {
  const isLoggedIn = useSelector((state) => state.auth.user);
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  
  useEffect(() => {
    dispatch(fetchListOfProducts(category));
  }, [dispatch, category]);

  return (
    <div className="product-main-container">
      {isLoggedIn ? <Dashboard /> : <HomeScreen />}
      <h1 className="pheading">Products under {category}</h1>
      <div className="grid">
        {products.length === 0 ? (
          <h1 className="empty">No products added</h1>
        ) : (
          products.map((product) => (
            <Link key={product.id} to={`product/${product.id}`} className="product-link">
              <div className="product-container">
                <img
                  src={product.image_url} alt={product.name}
                  className="product-image"
                />
                <p className="product-name">{product.name}</p>
                <p>product id: {product.id}</p>
                <p>Rental Options: {product.rentaloptions[0].tenure} months , {product.rentaloptions[0].ratepermonth} </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Productlist;