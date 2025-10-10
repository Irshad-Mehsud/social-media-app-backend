import { createStory } from "../db/index.js";
const storyService = async(story) => {
 await createStory(story);
};

export default storyService;