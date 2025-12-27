// src/api/client.js
// This file simulates a backend connection. 

const DUMMY_PRODUCTS = [
  {
    id: "rbst-001",
    name: "Rabuste Dark Roast",
    price: { sellingPrice: 399 },
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=Dark+Roast",
    description: "Bold and intense coffee with smoky notes. Perfect for those who love a strong kick to start their day."
  },
  {
    id: "rbst-002",
    name: "Rabuste Gold Blend",
    price: { sellingPrice: 449 },
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=Gold+Blend",
    description: "Smooth, balanced profile with hints of caramel and vanilla. A sophisticated choice for the afternoon."
  },
  {
    id: "rbst-003",
    name: "Rabuste Premium",
    price: { sellingPrice: 699 },
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=Premium",
    description: "Our finest selection for true connoisseurs. Hand-picked beans processed with meticulous care."
  }
];

export const apiClient = {
  // Simulate fetching products from a database
  getProducts: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(DUMMY_PRODUCTS);
      }, 500); 
    });
  },

  // NEW: Simulate fetching a single product
  getProduct: async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = DUMMY_PRODUCTS.find((p) => p.id === id);
        if (product) {
          resolve(product);
        } else {
          reject(new Error("Product not found"));
        }
      }, 300);
    });
  },

  // Simulate sending an order to the backend
  placeOrder: async (orderDetails) => {
    return new Promise((resolve) => {
      console.log("Sending order to backend:", orderDetails);
      setTimeout(() => {
        resolve({ success: true, orderId: "ORD-" + Date.now() });
      }, 1500); 
    });
  }
};