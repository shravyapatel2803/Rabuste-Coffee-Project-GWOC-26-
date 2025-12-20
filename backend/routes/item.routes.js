import express from "express";
import {getMenuItems,getShopItems,addItem,getAllItems,getItemById,updateItem,deleteItem,} from "../controllers/item.controller.js";

const router = express.Router();
//USER SIDE 
router.get("/menu", getMenuItems);
router.get("/shop", getShopItems);

//ADMIN SIDE
router.post("/admin/items", addItem);
router.get("/admin/items", getAllItems);
router.get("/admin/items/:id", getItemById);
router.put("/admin/items/:id", updateItem);
router.delete("/admin/items/:id", deleteItem);

export default router;
