import postData from "../services/post.js";
const postController = async(req, res) => {
    try {
        const user = await postData(req.body);  
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }   
};

export default postController;