import { Request, Response } from "express";
import { BlogServices } from "./blog.service";
import { deleteImageFromCloudinary } from "../../config/cloudinary.config";


const createBlog = async (req: Request, res: Response) => {
    try {
const bodyData = req.body.data ? JSON.parse(req.body.data) : req.body;

          const payload={
            ...bodyData,
    authorId: parseInt(req.body.authorId), 
      tags: req.body.tags ? JSON.parse(req.body.tags) : [],
      isFeatured: req.body.isFeatured === "true",
      thumbnail: req.file?.path || null,
        }
        
        const result = await BlogServices.createBlog(payload)
        res.status(201).json({data:result});
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}

const getAllBlogs = async (req: Request, res: Response) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const search = (req.query.search as string) || "";
        const isFeatured = req.query.isFeatured ? req.query.isFeatured === "true" : undefined
        const tags = req.query.tags ? (req.query.tags as string).split(",") : []

        const result = await BlogServices.getAllBlogs({ page, limit, search, isFeatured, tags });
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch posts", details: err });
    }
};
// get blog by id
const getBlogById = async (req: Request, res: Response) => {
    const post = await BlogServices.getBlogById(Number(req.params.id));
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
};


// update users
const   updateBlog= async (req:Request,res:Response)=>{
    try {
const id = Number(req.params.id);
const existingUser = await BlogServices.getBlogById(id)

   if (req.file && existingUser?.thumbnail) {
      await deleteImageFromCloudinary(existingUser.thumbnail);
    }
     const bodyData = req.body.data ? JSON.parse(req.body.data) : req.body;
    
          const payload={
       
            ...bodyData,
    authorId: parseInt(req.body.authorId), 
      tags: req.body.tags ? JSON.parse(req.body.tags) : [],
      isFeatured: req.body.isFeatured === "true",
      thumbnail: req.file?.path || null,
        }
        const result = await BlogServices.updateBlog(Number(req.params.id),payload)
        res.status(201).json(result)
    } catch (error) {
              res.status(500).send(error)
    }
}
// delete users
const   deleteBlog = async (req:Request,res:Response)=>{
    try {

        const result = await BlogServices.deleteBlog(Number(req.params.id))
        res.status(201).json(result)
    } catch (error) {
              res.status(500).send(error)
    }
}
export const BlogController ={
createBlog,
getAllBlogs,
getBlogById,
updateBlog,
deleteBlog
}