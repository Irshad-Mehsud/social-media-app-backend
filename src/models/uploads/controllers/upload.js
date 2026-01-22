import uploadFile from "../services/upload.js";
import { fileTypeFromFile } from 'file-type';
import fs from 'fs';

const uploadController = async (req, res) => {
  try {
    if (!req.file || !req.file.path || typeof req.file.path !== 'string') {
      return res.status(400).json({ status: 400, error: "No file uploaded or invalid file path" });
    }

    // Check file size
    if (req.file.size === 0) {
      // Clean up file
      if (fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
      return res.status(400).json({ status: 400, error: "Uploaded file is empty" });
    }

    // Determine MIME type
    let mimeType = req.file.mimetype;
    if (!mimeType || mimeType === 'application/octet-stream') {
      const fileTypeResult = await fileTypeFromFile(req.file.path);
      mimeType = fileTypeResult ? fileTypeResult.mime : null;
    }

    if (!mimeType || (!mimeType.startsWith('image/') && !mimeType.startsWith('video/'))) {
      // Clean up file
      if (fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
      return res.status(400).json({ status: 400, error: "Unsupported file type" });
    }

    // Upload file to Cloudinary - FIX: Pass the entire file object
    const uploadedUrl = await uploadFile(req.file);

    // Detect media type
    const type = mimeType.startsWith("video") ? "video" : "image";

    res.status(200).json({
      status: 200,
      message: "File uploaded successfully",
      url: uploadedUrl,
      type,
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ status: 500, error: "Internal Server Error" });
  }
};

export default uploadController;