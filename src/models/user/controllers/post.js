import postData from "../services/post.js";
import jwt from "jsonwebtoken";
const postController = async(req, res) => {
    try {
        const { email } = req.body;
        // Generate JWT token
   const token = jwt.sign(
            { email: email },
            process.env.JWT_SECRET
        );
        const user = await postData(req.body);  
        // Send response with token to client/frontend
        res.status(201).send({ status: 201, data: { ...user._doc, token }, message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.error(error);
    }   
};

export default postController;