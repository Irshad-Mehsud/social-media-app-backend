import { getStories } from "../db/index.js";

const getStoriesService = async () => {

    return getStories();

}

export default getStoriesService;