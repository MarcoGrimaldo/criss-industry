import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import WhyContent from "../components/WhyContent";
import GridPreviewItems from "../components/GridPreviewItems";
import MiscCardSection from "../components/MiscCardSection";
import ContactUsSection from "../components/ContacUsSection";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <WhyContent />
      <GridPreviewItems />
      <MiscCardSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default Home;
