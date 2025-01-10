

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Includes both Bootstrap JS and Popper

import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Header from './components/Header';
import Cart from './pages/cart/cart';
import Profile from './pages/profile/profile';
function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cart" exact={true} element={<Cart />} />
          <Route path="/profile" exact={true} element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
