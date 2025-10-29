import React from "react";
import { Routes, Route } from "react-router-dom";
import AppNavbar from "./components/layouts/Navbar";
import HeroSection from "./components/layouts/HeroSection";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CategorySection from "./components/home/CategorySection";

const App = () => {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<><HeroSection /><Home /></>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CategorySection />
      <Footer />
    </>
  );
};

export default App;
