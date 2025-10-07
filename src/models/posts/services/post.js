import { createPost } from "../db/index.js";
const postData = async(post) => {
return await createPost(post);
};

export default postData;