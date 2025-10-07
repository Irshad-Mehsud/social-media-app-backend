import postData from "../services/post.js";
const postController = async(req, res) => {
    try {
        const posts = await postData(req.body);  
        res.status(201).json({ posts, message: 'Post created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create post' });
    }   
};

export default postController;