import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import itemRoutes from "./routes/item.routes.js";
import artRoutes from "./routes/artRoutes.js";
import workshopRoutes from "./routes/workshopRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Rabuste Backend Running 🚀");
});

app.use("/api/items", itemRoutes);
app.use("/api/art", artRoutes);
app.use("/api/workshops", workshopRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
