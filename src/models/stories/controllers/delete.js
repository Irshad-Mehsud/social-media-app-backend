import { deleteStoryService } from "../services/delete.js";

const deleteController = async (req, res) => {
    try {
        const { id } = req.params;
    await deleteStoryService(id);
    res.status(200).json({ message: "Story deleted successfully" });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default deleteController;