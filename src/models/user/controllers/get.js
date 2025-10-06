import getData from "../services/get.js";

const getController =async (req, res) => {
try {
    const user= await getData();
    res.status(200).json({ status:200, data: user,message:"User fetched successfully" });
} catch (error) {
    res.status(500).json({ status:500, error: error.message });
}
};

export default getController;