import { Router } from "express";
import multer from "multer";
import uploadController from "./controllers/upload.js";

const router = Router();
// Multer configuration: use memory storage for serverless
const upload = multer({ storage: multer.memoryStorage() });
// Files will be available in req.file.buffer
router.post("/", upload.single("file"), uploadController);

export default router;