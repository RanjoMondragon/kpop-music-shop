import React from "react";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from 'react-router-dom';
import PoliciesPage from './pages/PoliciesPage';
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Sucess from "./pages/Sucess";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/policies" element={<PoliciesPage/>} />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/success" element={<Sucess/>} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

      </Routes>
    </div>
  );
}

export default App;
