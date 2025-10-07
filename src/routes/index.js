import { Router } from "express";
import userRoutes from "../models/user/routes.js";
import postRoutes from "../models/posts/routes.js";
const router = Router();

router.use("/user",userRoutes)
router.use("/post",postRoutes)


export default router;