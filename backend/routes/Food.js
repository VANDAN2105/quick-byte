import express from "express";
import { addFood, listFood, removeFood } from "../controllers/Food.js";
import multer from "multer";

const foodRouter = express.Router();
//img-store

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, callback) => {
    return callback(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({
  storage: storage,
});
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);
export default foodRouter;
