import React from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import FAQ from './FAQs';

const FullFAQ = () => {
  return (
    <main className="min-h-screen bg-rabuste-bg text-rabuste-text">
      <Navbar />
      <div className="pt-24">
        <FAQ isPreview={false} />
      </div>
      <Footer />
    </main>
  );
};

export default FullFAQ;