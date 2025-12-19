import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingBag } from 'lucide-react';

// Mock Data based on your JSON structure
const SAMPLE_PRODUCTS = [
  {
    id: "rbst-001",
    name: "Rabuste Dark Roast",
    slug: "rabuste-dark-roast",
    category: "Coffee Beans",
    roastLevel: "Dark",
    weight: "250g",
    price: { mrp: 499, sellingPrice: 399, currency: "INR" },
    images: [{ imageName: "dark-roast-front.jpg" }], // Simplified for demo
    shortDescription: "Bold and intense coffee with smoky notes, perfect for strong coffee lovers.",
    tastingNotes: ["Smoky", "Dark Chocolate", "Woody"],
    ratings: { average: 4.6, count: 120 },
    stockStatus: "In Stock"
  },
  // Adding dummy data to demonstrate the layout
  {
    id: "rbst-002",
    name: "Rabuste Gold Blend",
    slug: "rabuste-gold-blend",
    category: "Coffee Beans",
    roastLevel: "Medium",
    weight: "250g",
    price: { mrp: 549, sellingPrice: 449, currency: "INR" },
    images: [{ imageName: "gold-blend-front.jpg" }],
    shortDescription: "Smooth, balanced profile with hints of caramel and roasted nuts.",
    tastingNotes: ["Caramel", "Nutty", "Balanced"],
    ratings: { average: 4.8, count: 85 },
    stockStatus: "In Stock"
  },
  {
    id: "rbst-003",
    name: "Rabuste Espresso",
    slug: "rabuste-espresso",
    category: "Ground Coffee",
    roastLevel: "Medium-Dark",
    weight: "250g",
    price: { mrp: 499, sellingPrice: 380, currency: "INR" },
    images: [{ imageName: "espresso-front.jpg" }],
    shortDescription: "Fine grind optimized for espresso machines. Crema rich and potent.",
    tastingNotes: ["Berry", "Cocoa", "Intense"],
    ratings: { average: 4.7, count: 200 },
    stockStatus: "Out of Stock"
  }
];

const Shop = ({ isPreview = false }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating API fetch
    // const res = await API.get("/products");
    setProducts(SAMPLE_PRODUCTS);
  }, []);

  const displayedProducts = isPreview ? products.slice(0, 3) : products;

  return (
    <div className="px-6 py-20 bg-rabuste-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-rabuste-orange font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            From Our Roastery
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white">
            {isPreview ? "Signature Roasts" : "All Products"}
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayedProducts.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:border-rabuste-orange/50 transition-all duration-300"
            >
              {/* Image Area */}
              <div className="relative h-64 overflow-hidden bg-black/20">
                {/* Badge */}
                {product.stockStatus === "Out of Stock" && (
                  <span className="absolute top-4 right-4 bg-red-900/80 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider z-10">
                    Sold Out
                  </span>
                )}
                <img
                  // Placeholder logic since we don't have the real images yet
                  src={`https://placehold.co/600x400/1a1a1a/FFF?text=${product.name.replace(/ /g, '+')}`} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-serif font-bold  group-hover:text-rabuste-gold transition-colors">
                    {product.name}
                  </h2>
                  <div className="flex items-center gap-1 text-rabuste-gold">
                    <Star size={14} fill="currentColor" />
                    <span className="text-sm font-bold">{product.ratings.average}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tastingNotes.map((note, idx) => (
                    <span key={idx} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/10 text-gray-300 rounded-sm">
                      {note}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {product.shortDescription}
                </p>

                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 line-through">₹{product.price.mrp}</span>
                    <span className="text-lg font-bold ">₹{product.price.sellingPrice}</span>
                  </div>
                  
                  <button className="flex items-center gap-2 px-4 py-2 bg-rabuste-text text-rabuste-bg font-bold text-xs uppercase tracking-wider hover:bg-rabuste-orange hover:text-white transition-colors">
                    <ShoppingBag size={16} />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {isPreview && (
          <div className="flex justify-center mt-16">
            <Link 
              to="/shop" 
              className="px-8 py-3 border border-rabuste-gold text-rabuste-gold font-bold tracking-widest uppercase hover:bg-rabuste-gold hover:text-black transition-all"
            >
              View All Roasts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;