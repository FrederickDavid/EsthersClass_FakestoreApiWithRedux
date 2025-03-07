import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./container/Header";
import ProductListings from "./container/ProductListings";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListings />} />
      </Routes>
    </Router>
  );
};

export default App;
