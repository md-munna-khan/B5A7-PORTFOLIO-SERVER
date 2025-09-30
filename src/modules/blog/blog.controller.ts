import { Request, Response } from "express";
import { BlogServices } from "./blog.service";


const createBlog = async (req: Request, res: Response) => {
    try {
const bodyData = req.body.data ? JSON.parse(req.body.data) : req.body;
          const payload={
            ...bodyData,
            thumbnail:req.file?.path,
           
        }
        
        const result = await BlogServices.createBlog(payload)
        res.status(201).json({data:result});
    } catch (error) {
        res.status(500).send(error)
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

export const BlogController ={
createBlog,
getAllBlogs
}