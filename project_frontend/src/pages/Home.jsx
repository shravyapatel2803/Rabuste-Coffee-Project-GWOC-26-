import React from 'react';
import Navbar from '../componets/Navbar';
import Hero from '../componets/Hero';
import Features from '../componets/feature';
import MenuSection from './Menu';
import Gallery from '../pages/ArtGallery';
import Franchise from "../pages/Franchise";
import Footer from '../componets/Footer';
import FAQ from "../pages/FAQs";
import Shop from './Shop'; // Import the new component


const Home = () => {
  return (
    <main className="min-h-screen bg-rabuste-bg text-rabuste-text selection:bg-rabuste-orange selection:text-white">
      <Navbar />
      <Hero />
      
      <div className="relative z-10 bg-rabuste-bg">
        <section id="about">
          <Features />
        </section>

        <section id="menu">
          <MenuSection isPreview={true} />
        </section>
        
        {/* Add the new Shop Section here */}
        <section id="shop">
          <Shop isPreview={true} />
        </section>

        <section id="gallery">
          <Gallery isPreview={true} />
        </section>

        <section id="franchise">
          <Franchise />
        </section>

        <section id="faqs">
          <FAQ isPreview={true} />
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default Home;