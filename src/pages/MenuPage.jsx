import React, { useEffect } from "react";
import MenuSection from "../components/menu/MenuSection";

export default function MenuPage() {
  useEffect(() => {
    document.title = "Menu | Greenwood Gourmet Grocery";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-4">
      <MenuSection />
    </div>
  );
}
