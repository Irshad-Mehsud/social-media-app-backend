import storyService from "../services/post.js";


const postController = async (req, res) =>{

    try {
        const story = await storyService(req.body);  
        res.status(201).json(story);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }


}

export default postController;