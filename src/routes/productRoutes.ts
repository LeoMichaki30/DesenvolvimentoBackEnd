import { Router } from "express";
import ProductController from "../controller/ProductController.js";

const router = Router();

router.get("/", ProductController.findAll);

export default router;