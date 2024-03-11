import Post from "../models/Post.js"

export const createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body)
    res.status(201).json(post)
  } catch (error) {
    next(error)
  }
}

export const getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) return next(errorHandler(404, "Post not found!"))
    res.status(200).json(post)
  } catch (error) {
    next(error)
  }
}
export const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id)
   // if (!post) return next(errorHandler(404, "Post not found!"))
    res.status(200).json(post)
  } catch (error) {
    next(error)
  }
}

export const getPosts = async (req, res, next) => {
  try {
    console.log(req.query)
    const searchTerm = req.query.searchTerm || ""

    const posts = await Post.find({
     title: { $regex: searchTerm, $options: "i" },
    // description: { $regex: searchTerm, $options: "i" },
      
    })

    res.status(200).json(posts)
  } catch (error) {
    next(error)
  }
}
