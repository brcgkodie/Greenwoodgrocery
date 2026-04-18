import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopifyProvider } from "./context/ShopifyContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import StoryPage from "./pages/StoryPage";
import VisitPage from "./pages/VisitPage";

export default function GreenwoodSite() {
  return (
    <BrowserRouter>
      <ShopifyProvider>
        <div className="min-h-screen bg-cream text-forest parchment-grain">
          <ScrollToTop />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/our-story" element={<StoryPage />} />
              <Route path="/visit" element={<VisitPage />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </ShopifyProvider>
    </BrowserRouter>
  );
}
