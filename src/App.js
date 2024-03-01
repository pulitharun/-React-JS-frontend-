import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/Homescreen'
import Register from './components/register';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Category from './components/category';
import Productlist from './components/products';
import ProductDetails from './components/productdetails';
import Cart from './components/cart';
import Orders from './components/orders';
import Logout from './components/logout';


function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/register" element={<Register />} />
          <Route path= '/login' element = {<Login/>}/>
          <Route path= '/dashboard' element = {<Dashboard/>}/>
          <Route path= '/category' element = {<Category/>}/>
          <Route path="/category/:category" element={<Productlist/>} />
        <Route path="/category/:category/product/:productId" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path= '/logout' element = {<Logout/>}/>
        </Routes>
    </Router>
    </>
  );
}
export default App;



