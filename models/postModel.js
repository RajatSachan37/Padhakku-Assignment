const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "User's id is required"],
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
