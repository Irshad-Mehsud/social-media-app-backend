import getStoriesService from "../services/get.js";
const getController = async (req, res) => {
    try {
       const stories = await getStoriesService();
         res.status(200).json({ status:200, data: stories,message:"Stories fetched successfully" });

    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default getController;