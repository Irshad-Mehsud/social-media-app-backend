import upLoadToCloudinary from "../middleware/cloudinary.js";

const uploadFile = async (fileObj) => {
  // Add validation to ensure fileObj exists
  if (!fileObj) {
    throw new Error("File object is required");
  }
  
  if (!fileObj.path) {
    throw new Error("File path is missing from file object");
  }
  
  if (!fileObj.mimetype) {
    throw new Error("File mimetype is missing from file object");
  }
  
  console.log("Service received file object:", fileObj);
  console.log("File path:", fileObj.path);
  console.log("File mimetype:", fileObj.mimetype);
  
  return await upLoadToCloudinary(fileObj.path, fileObj.mimetype);
};

export default uploadFile;