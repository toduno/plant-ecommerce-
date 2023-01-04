import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/home/Home"
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <div className="text-sm md:text-base  min-h-[100vh] flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
