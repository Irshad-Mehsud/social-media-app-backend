import { createStory } from "../db/index.js";
import upLoadToCloudinary from "../../uploads/middleware/cloudinary.js";
import fs from "fs-extra";


const postController = async (req, res) => {
  try {
    const { user, caption } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ 
        success: false,
        message: 'Image file is required' 
      });
    }

    if (!user) {
      return res.status(400).json({ 
        success: false,
        message: 'User ID is required' 
      });
    }

    // Upload to Cloudinary (this already deletes the file internally)
    const imageUrl = await upLoadToCloudinary(req.file.path, req.file.mimetype);

    const storyData = {
      user,
      image: imageUrl,
      caption: caption || '',
    };

    await createStory(storyData);
    
    res.status(201).json({ 
      success: true,
      message: "Story created successfully",
      data: { image: imageUrl }
    });
  } catch (error) {
    console.error("Error creating story:", error);
    
    // Cleanup file on error
    if (req.file?.path && await fs.pathExists(req.file.path)) {
      await fs.remove(req.file.path);
    }
    
    res.status(500).json({ 
      success: false,
      message: error.message 
    });
  }
};

export default postController;