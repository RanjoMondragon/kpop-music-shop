import Home from "./pages/Home";
import { Routes, Route, Navigate} from 'react-router-dom';
import PoliciesPage from './pages/PoliciesPage';
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import AllProducts from "./pages/AllProducts";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Wishlist from "./pages/Wishlist";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/policies" element={<PoliciesPage/>} />
        <Route path="/products" element={<AllProducts/>} />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/wishlist" element={!user ? <Navigate to="/" /> : <Wishlist />} />
        { user && <Route path="/profile/:userId" element={<Profile userId={user._id}/>} />}
      </Routes>
    </div>
  );
}

export default App;
