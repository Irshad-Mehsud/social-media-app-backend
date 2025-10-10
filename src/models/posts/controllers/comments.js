// Controller
import { commentsById } from "../db/index.js";
const addComment = async (req, res) => {
  try {
    const postId = req.params.id;
    const commentData = req.body;
    const updatedPost = await commentsById(postId, commentData);
    res.status(201).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default addComment;
