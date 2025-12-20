// This file simulates a backend connection. 
// When you have a real backend, replace the "resolve" parts with axios.get/post

const DUMMY_PRODUCTS = [
  {
    id: "rbst-001",
    name: "Rabuste Dark Roast",
    price: { sellingPrice: 399 },
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=Dark+Roast",
    description: "Bold and intense coffee with smoky notes."
  },
  {
    id: "rbst-002",
    name: "Rabuste Gold Blend",
    price: { sellingPrice: 449 },
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=Gold+Blend",
    description: "Smooth, balanced profile with hints of caramel."
  },
  {
    id: "rbst-003",
    name: "Rabuste Premium",
    price: { sellingPrice: 699 },
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=Premium",
    description: "Our finest selection for true connoisseurs."
  }
];

export const apiClient = {
  // Simulate fetching products from a database
  getProducts: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(DUMMY_PRODUCTS);
      }, 500); // Fakes a 0.5s network delay
    });
  },

  // Simulate sending an order to the backend
  placeOrder: async (orderDetails) => {
    return new Promise((resolve) => {
      console.log("Sending order to backend:", orderDetails);
      setTimeout(() => {
        resolve({ success: true, orderId: "ORD-" + Date.now() });
      }, 1500); // Fakes a 1.5s processing time
    });
  }
};