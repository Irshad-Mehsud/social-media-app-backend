import { getAllPosts } from "../db/index.js";
const getData = () => {
return getAllPosts();
};

export default getData;