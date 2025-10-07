import Post from "../../posts/models/index.js";
// =================Helper for Post Service=================

const createPost = async (postData) => {
    const post = new Post(postData);
    await post.save();
    return post;
};

const getAllPosts = async () => {
    const posts = await Post.find({}).populate("user", "name eamil profilePicture")
                                      .populate("likes", "name email profilePicture")
                                      .sort({ createdAt: -1 }); // latest posts first
    return posts; // password will already be stripped out
};

const deleteById = async (id) => {
return  await Post.findByIdAndDelete(id);
};

const updatedById = async (id, data) => {
  try {
    await Post.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error("Error updating post: " + error.message);
  } 
};

export {
    // ==================Exported Helper for Post Service=================
    createPost,
    getAllPosts,
    deleteById,
    updatedById
}