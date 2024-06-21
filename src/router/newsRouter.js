import express from "express";

const router = express.Router();

import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
} from "../controller/newsController.js";

router.post("/add", createPost);
router.get("/all", getAllPosts);
router.get("/:id", getPostById);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router;
