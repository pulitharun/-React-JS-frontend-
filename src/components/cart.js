//cart.js

import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  useNavigate } from "react-router-dom"
import { Removefromcart, storeinvoice } from "./cartslice"
import { fetchUserId } from "./customerslice"

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.auth.user);
  const customerdata = useSelector((state) => state.customerid.items);

  const removeHandler = (id) => {
    dispatch(Removefromcart(id));
  };
  useEffect(() => {
    if (user) {
      dispatch(fetchUserId(user.username));
    }
  }, [user, dispatch]);
  const checkouthandler = () => {
    let name = customerdata.id;
    let amount = cartItems.reduce((total, item) => total + item.amount, 0);
    let status = "ORDERED";
    let products = cartItems.map((item) => item.id);
    let tenure = cartItems.map((item)=>item.tenure);
    tenure=tenure[0]
    const invoicedata = {
      name: name,
      amount: amount,
      status: status,
      products: products,
      tenure: tenure,
    };
    dispatch(storeinvoice(invoicedata));
    console.log(invoicedata);
    window.alert("ordered successfully");
    navigate("/orders");
  };

  const cartItemStyle = {
    border: "1px solid #e0e0e0",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "15px",
    margin: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };
  

  return (
    <div className="cart-container">
      <h1> Cart</h1>
      {cartItems.length === 0 ? (
        <center>
          <h1>Your cart is empty</h1>
        </center>
      ) : (
        <div>
          <div style={{ marginBottom: "20px" }}>
          </div>
          <button onClick={checkouthandler}>Checkout</button>
          <hr/>
          {cartItems.map((item) => (
            <div key={item.id} style={cartItemStyle} className="cart-item">
              <p>Username: {user.username}</p>
              <p>Item Id: {item.id}</p>
              <p>Name: {item.name}</p>
              <p>Tenure: {item.tenure} months</p>
              <p>Quantity: {item.quantity}</p>
              <p>Amount: ₹{item.amount}</p>
              <button onClick={() => removeHandler(parseInt(item.id))}>
                Remove from cart
              </button>
              <hr/>
            </div>
          ))}
          <p>Total Amount: ₹{cartItems.reduce((total, item) => total + item.amount, 0)}</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;