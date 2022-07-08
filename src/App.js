import Navbar from "./components/Navbar";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import ProductViewAll from "./components/ProductViewAll";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/viewAll" element={<ProductViewAll/>}/>
      </Routes>
      <Feedback />
      <Footer />
    </>
  );
}

export default App;
