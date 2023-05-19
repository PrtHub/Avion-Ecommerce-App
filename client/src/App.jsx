import "./App.css";
import { Footer, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Cart, Home, Product, Products } from "./pages";


const App = () => {
  return (
    <>
      <div className="overflow-hidden max-w-[1440px] mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
