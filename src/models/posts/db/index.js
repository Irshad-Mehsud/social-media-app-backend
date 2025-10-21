import Post from "../../posts/models/index.js";
import mongoose from "mongoose";
// =================Helper for Post Service=================

const createPost = async (data) => {
  const { user, desc, image } = data;
  console.log("Creating post with data:", data);
  if (!user || !desc) {
    throw new Error("User ID and description are required.");
  }

  const post = new Post({
    user:new mongoose.Types.ObjectId(user),       // matches schema
    desc: desc,  // matches schema
    image: image || "",
  });

  await post.save();
  return post;
};
const getAllPosts = async () => {
  const posts = await Post.find({})
    .populate("user", "name email profilePicture") // populate post author
    .populate("likes", "name profilePicture")      // populate liked users
    .populate({
      path: "comments.user",                       // nested populate (inside comments array)
      select: "name profilePicture",               // only these fields
    })
    .sort({ createdAt: -1 }); // latest first

  return posts;
};


const deleteById = async (id) => {
  return await Post.findByIdAndDelete(id);
};

const updatedById = async (id, data) => {
  try {
    await Post.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error("Error updating post: " + error.message);
  }
};


const toggleLike = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.body.userId;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.likes.includes(userId)) {
      post.likes.pull(userId); // Unlike
    } else {
      post.likes.push(userId); // Like
    }

    await post.save();

    res.status(200).json({
      message: post.likes.includes(userId) ? "Post liked" : "Post unliked",
      likesCount: post.likes.length,
      post,
    });
  } catch (error) {
    res.status(500).json({ message: "Error toggling like", error });
  }
};

// const commentsById = async (postId, commentData) => {
//   try {
//     const post = await Post.findById(postId);
//     if (!post) {
//       throw new Error("Post not found");
//     } 
//     post.comments.push(commentData);
//     await post.save();
//     return post;
//   } catch (error) {
//     throw new Error("Error adding comment: " + error.message);
//   }
// };

const commentsById = async (postId, commentData) => {
  try {
    const post = await Post.findById(postId);

    if (!post) {
      throw new Error("Post not found");
    }

    // Ensure commentData has both user and text
    if (!commentData.user || !commentData.text) {
      throw new Error("User ID and comment text are required");
    }

    const newComment = {
      user: commentData.user,
      text: commentData.text,
      createdAt: new Date(),
    };

    post.comments.push(newComment);
    await post.save();

    return post;
  } catch (error) {
    throw new Error("Error adding comment: " + error.message);
  }
};





export {
  // ==================Exported Helper for Post Service=================
  createPost,
  getAllPosts,
  deleteById,
  updatedById,
  toggleLike,
  commentsById,

};
