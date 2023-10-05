const express = require("express");
const appController = require("./../controllers/appController");

const router = express.Router();

router.use(express.json());

router.route("/signup").post(appController.createUser);

router.route("/posts").post(appController.createPost);

router.route("/deletePost/:postId").delete(appController.deletePost);

router.route("/posts/:userId").get(appController.getPost);

module.exports = router;
