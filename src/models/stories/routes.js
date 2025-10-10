import { Router } from "express";
import postController from "./controllers/post.js";
import getController from "./controllers/get.js";




const router = Router();

router.post("/", postController);
router.get("/", getController)


export default router;