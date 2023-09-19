import React from "react";
import {DataFunction} from "./CreateData/Creating.jsx";
import Product from "./Component/Product.jsx";
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Cart from "./Component/Cart.jsx";

function App() {

  return (
  <DataFunction>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </DataFunction>
  )
}

export default App
