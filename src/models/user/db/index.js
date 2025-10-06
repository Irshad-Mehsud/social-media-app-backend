import User from "../models/index.js";
import mongoose from "mongoose";

const createUser = async (userData) => {
    const user = new User(userData);
    await user.save();
    return user;
};

const getAllData = async () => {
    const users = await User.find({}).populate("followers", "name email profilePicture")
                                     .populate("following", "name email profilePicture");
    return users; // password will already be stripped out
};




// follow user
const followUser = async (req, res) => {
  try {
   const currentUserId = req.body.id;   // the user who follows
   const targetUserId = req.params.id;  // the user to be followed


    // console.log(currentUserId, targetUserId);

    if (currentUserId === targetUserId) {
      return res.status(400).json({ message: "You cannot follow yourself" });
    }

    await User.findByIdAndUpdate(currentUserId, {
      $addToSet: { following: targetUserId },
    });

    await User.findByIdAndUpdate(targetUserId, {
      $addToSet: { followers: currentUserId },
    });

    res.status(200).json({ message: "Followed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// unfollow user
 const unfollowUser = async (req, res) => {
  try {
   const currentUserId = req.body.id;   // the user who follows
   const targetUserId = req.params.id;  // the user to be followed

    if (currentUserId === targetUserId) {
      return res.status(400).json({ message: "You cannot unfollow yourself" });
    }

    await User.findByIdAndUpdate(currentUserId, {
      $pull: { following: targetUserId },
    });

    await User.findByIdAndUpdate(targetUserId, {
      $pull: { followers: currentUserId },
    });

    res.status(200).json({ message: "Unfollowed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updattedById = async (id, data) => {
  try {
    await User.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error("Error updating user: " + error.message);
  }
};

const deleteById = async (id) => {
  try {
    await User.findByIdAndDelete(id); 
  } catch (error) {
    throw new Error("Error deleting user: " + error.message);
  }
};















export {
    createUser,
    followUser,
    unfollowUser,
    getAllData,
    updattedById,
    deleteById
}