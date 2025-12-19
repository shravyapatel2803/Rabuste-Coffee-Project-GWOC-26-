import React from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import Franchise from './Franchise';

const FullFranchise = () => {
  return (
    <main className="min-h-screen bg-rabuste-bg text-rabuste-text">
      <Navbar />
      <div className="pt-24">
        <Franchise />
      </div>
      <Footer />
    </main>
  );
};

export default FullFranchise;