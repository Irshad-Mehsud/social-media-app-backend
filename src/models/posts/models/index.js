import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // reference to the user who created the post
      required: true,
    },
    desc: {
      type: String,
      maxLength: 500, // caption / text content
    },
    image: {
      type: String, // image URL or path
      default: "",
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // users who liked the post
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
