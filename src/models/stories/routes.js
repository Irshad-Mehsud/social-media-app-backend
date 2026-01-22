import { Router } from "express";
import postController from "./controllers/post.js";
import getController from "./controllers/get.js";
import deleteController from "./controllers/delete.js";
import { upload } from "./middleware/upload.js";

const router = Router();

router.post("/", upload.single('image'), postController);
router.get("/", getController);
router.delete("/:id", deleteController);

export default router;