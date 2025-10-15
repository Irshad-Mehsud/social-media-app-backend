import { Router } from "express";
import userRoutes from "../models/user/routes.js";
import postRoutes from "../models/posts/routes.js";
import storyRoutes from "../models/stories/routes.js";
import uploadRoutes from "../models/uploads/routes.js";


const router = Router();



router.use("/auth",userRoutes)
router.use("/post",postRoutes)
router.use("/story",storyRoutes)
router.use("/upload",uploadRoutes)


export default router;