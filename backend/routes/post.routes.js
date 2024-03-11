import express from "express"

import { createPost, deletePost, getPost, getPosts } from "../controllers/post.controller.js"

var router = express.Router()

// @AssetPlus: This is a sample get request


router.post("/create", createPost)
router.get('/get',getPosts)
router.get("/get/:id", getPost)
router.delete("/delete/:id", deletePost)




// @AssetPlus: Add other routes here
// router.post("/add")
export default router
