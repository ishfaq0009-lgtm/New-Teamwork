import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ProductPage from "./pages/ProductPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/AddProduct' element={<AddProduct />}></Route>
        <Route path='/AllProduct' element={<AllProduct />}></Route>
        <Route path='/OrderProduct' element={<OrderProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;