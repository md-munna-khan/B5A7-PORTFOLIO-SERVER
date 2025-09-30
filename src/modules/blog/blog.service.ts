import { Blog, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";


// create
const createBlog= async (payload:Prisma.BlogCreateInput):Promise<Blog> =>{
const result = await prisma.blog.create({
    data:payload,
    include:{
        author:{
            select:{
                id:true,
                name:true,
                email:true
            }
        }
    }
})
console.log(result)
return result
}
// get all blogs
const getAllBlogs = async ({
    page = 1,
    limit = 10,
    search,
    isFeatured,
    tags
}: {
    page?: number,
    limit?: number,
    search?: string,
    isFeatured?: boolean,
    tags?: string[]
}) => {
    const skip = (page - 1) * limit;

    const where: any = {
        AND: [
            search && {
                OR: [
                    { title: { contains: search, mode: 'insensitive' } },
                    { content: { contains: search, mode: 'insensitive' } }
                ]

            },
            typeof isFeatured === "boolean" && { isFeatured },
            (tags && tags.length > 0) && { tags: { hasEvery: tags } }
        ].filter(Boolean)
    }

    const result = await prisma.blog.findMany({
        skip,
        take: limit,
        where,
        include: {
            author: true
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    const total = await prisma.blog.count({ where })

    return {
        data: result,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    };
};

export const BlogServices ={
    createBlog,
    getAllBlogs
}