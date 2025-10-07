import { Router } from "express";
import postController from "./controllers/post.js";
import getController from "./controllers/get.js";
import updateController from "./controllers/update.js";
import deleteController from "./controllers/delete.js";
import { toggleLike } from "./db/index.js";

const router = Router();

router.post("/", postController);
router.get("/", getController)
router.put("/:id", updateController)
router.delete("/:id", deleteController);
router.put("/:id/likes",toggleLike)


export default router;
