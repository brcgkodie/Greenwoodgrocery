import React from "react";
import Hero from "../components/hero/Hero";
import MenuSection from "../components/menu/MenuSection";
import Provisions from "../components/provisions/Provisions";
import Story from "../components/story/Story";
import Reviews from "../components/reviews/Reviews";
import Visit from "../components/visit/Visit";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MenuSection limit={6} showViewAll />
      <Provisions />
      <Story />
      <Reviews />
      <Visit />
    </>
  );
}
