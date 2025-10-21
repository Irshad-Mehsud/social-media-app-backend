import postData from "../services/post.js";
const postController = async (req, res) => {
  try {
    const post = await postData(req.body);
    res.status(201).json({ post, message: "Post created successfully!" });
  } catch (error) {
    console.error("❌ Post creation failed:", error.message);
    res.status(500).json({ error: error.message || "Failed to create post" });
  }
};

export default postController;