import React from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import Shop from './Shop';

const FullShop = () => {
  return (
    <main className="min-h-screen bg-rabuste-bg text-rabuste-text">
      <Navbar />
      <div className="pt-24">
        {/* Pass isPreview={false} so it shows everything */}
        <Shop isPreview={false} />
      </div>
      <Footer />
    </main>
  );
};

export default FullShop;