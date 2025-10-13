import { deleteStoryById } from "../db/index.js";

const deleteStoryService = async (id) => {
   await deleteStoryById(id);
};

export { deleteStoryService };