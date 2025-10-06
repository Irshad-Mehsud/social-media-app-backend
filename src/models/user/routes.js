import { Router } from "express";
import { followUser, unfollowUser } from "../user/db/index.js";
import postController from "./controllers/post.js";
import getController from "./controllers/get.js";
import updateController from "./controllers/update.js";
import deleteController from "./controllers/delete.js";
const router = Router();

router.post("/", postController);
router.put("/:id/follow", followUser)
router.put("/:id/unfollow", unfollowUser)
router.get("/", getController)
router.put("/:id", updateController)
router.delete("/:id", deleteController);
// router.post("/unfollow", unfollowUser);


export default router;
