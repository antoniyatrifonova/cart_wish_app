import React from "react";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import HeroSection from "./HeroSection.jsx";
import FeatureProducts from "./FeatureProducts.jsx";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iphone 16 Pro"
        subtitle="Experience the power of the latest iPhone 16 with our most Pro camera ever."
        link="/"
        image={iphone}
      />
      <FeatureProducts />
      <HeroSection
        title="Build ultimate setup"
        subtitle="You can add Studio Display and color-matched Magic accessories to your bag after configure your Mac mini."
        link="/"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
