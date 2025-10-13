import { Router } from "express";
import postController from "./controllers/post.js";
import getController from "./controllers/get.js";
import deleteController from "./controllers/delete.js";




const router = Router();

router.post("/", postController);
router.get("/", getController)
router.delete("/:id", deleteController);


export default router;