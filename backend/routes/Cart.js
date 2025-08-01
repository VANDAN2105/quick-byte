import express from "express";
import { addToCart, removeFromCart, getCart } from "../controllers/Cart.js";
import authMiddleware from "../middlewares/Auth.js";
const cartRouter = express.Router();
//secured
cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeFromCart);
cartRouter.post("/get", authMiddleware, getCart);
export default cartRouter;
