import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ConfigDrawer from "./components/menu/ConfigDrawer";
import CartDrawer from "./components/cart/CartDrawer";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import SandwichDetailPage from "./pages/SandwichDetailPage";
import StoryPage from "./pages/StoryPage";
import VisitPage from "./pages/VisitPage";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-[#faf6ed] text-[#1f3a2b]">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/:slug" element={<SandwichDetailPage />} />
            <Route path="/our-story" element={<StoryPage />} />
            <Route path="/visit" element={<VisitPage />} />
          </Routes>
          <Footer />
          <ConfigDrawer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
