import React from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import Menu from './Menu';

const FullMenu = () => {
  return (
    <main className="min-h-screen bg-rabuste-bg text-rabuste-text">
      <Navbar />
      <div className="pt-24">
        {/* Pass isPreview={false} explicitly, or let it default */}
        <Menu isPreview={false} />
      </div>
      <Footer />
    </main>
  );
};

export default FullMenu;