import { deleteStoryById } from "../db/index.js";

const deleteController = async (req, res) => {
  try {
    await deleteStoryById(req.params.id);
    res.status(200).json({ message: "Story deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default deleteController;