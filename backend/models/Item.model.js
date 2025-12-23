import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, default: "INR" },
    category: { type: String, required: true, trim: true },

    // FIX: Added defaults so Admin Panel works without sending these
    type: {
      type: String,
      enum: ["drink", "product"],
      default: "drink", // Default to drink
    },

    // FIX: Added defaults so item shows up everywhere
    showIn: {
      type: [String],
      enum: ["menu", "shop"],
      default: ["menu", "shop"], 
    },

    roastType: { type: String, enum: ["light", "medium", "dark"], default: null },
    flavorNotes: { type: [String], default: [] },
    rating: { type: Number, default: 0, min: 0, max: 5 },

    image: {
      url: { type: String, required: true },
      alt: { type: String, default: "" },
    },

    availability: {
      isAvailable: { type: Boolean, default: true },
      isSoldOut: { type: Boolean, default: false },
    },

    tags: { type: [String], default: [] },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);
export default Item;