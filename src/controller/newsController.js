import { newsData } from "../model/newsModel.js"

//ADD NEW POST
export const createPost= async(req,res)=>{
    const {title,description,author}=req.body
    try {
        const newPost= newsData.create(title,description,author)
        await newPost.save();
        res.status(201).send(newPost)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//GET ALL POSTS
export const getAllPosts= async(req,res)=>{
    try {
        const posts= await newsData.find()
        res.status(200).send(posts)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//GET POST BY ID
export const getPostById= async(req,res)=>{
    const {id}=req.params;
    try {
        const post=await newsData.findById(id)
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//DELETE POST
export const deletePost= async(req,res)=>{
    const {id}=req.params
    try {
        const deletedPost=await newsData.findByIdAndDelete(id)
        res.status(200).json({message:'Post successfully deleted'})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//UPDATE POST
export const updatePost= async(req,res)=>{
    const {id}=req.params
    const { title, description, author } = req.body;
    try {
        const updatedPost=await newsData.findByIdAndUpdate(id,
            { title, description, author },
            { new: true })
        res.status(200).send(updatedPost)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}