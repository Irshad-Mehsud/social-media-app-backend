import Story from "../models/index.js";
import User from "../../user/models/index.js";

// Create new story and attach to user
const createStory = async (storyData) => {
  try {
    // 1️⃣ Create a new story document
    const newStory = new Story(storyData);
    await newStory.save();

    // 2️⃣ Attach story to the user’s "stories" array
    await User.findByIdAndUpdate(storyData.user, {
      $push: { stories: newStory._id },
    });

    // 3️⃣ Return the created story
    return newStory;
  } catch (error) {
    throw new Error("Error creating story: " + error.message);
  }
};

const getStories = async () => {
    try {
        const stories = await Story.find({})
        .populate("user", "name email profilePicture") // populate story author
        .sort({ createdAt: -1 });
        return stories;
    } catch (error) {
        throw new Error("Error fetching stories: " + error.message);
    }
}

export { 
    createStory,
    getStories 
};