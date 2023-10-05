const User = require("../models/userModel");
const Post = require("../models/postModel");

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
    });
    res.status(200).json({
      status: "success",
      message: "Successful user sign-up",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createPost = async (req, res) => {
  try {
    const newPost = await Post.create({
      userId: req.body.userId,
      content: req.body.content,
    });
    res.status(200).json({
      status: "success",
      message: "Successfully created",
      data: {
        post: newPost,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.postId);
    res.status(200).json({
      status: "success",
      message: `Successful post deletion (postId: ${req.params.postId})`,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getPost = async (req, res) => {
  try {
    const posts = await Post.find({
      userId: req.params.userId,
    });
    res.status(200).json({
      status: "success",
      data: {
        posts: posts,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
