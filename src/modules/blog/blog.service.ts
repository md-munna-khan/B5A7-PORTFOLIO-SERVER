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

// get blog by id
const getBlogById = async (id: number) => {
    return await prisma.$transaction(async (tx) => {
        await tx.blog.update({
            where: { id },
            data: {
                views: {
                    increment: 1
                }
            }
        });

        return await tx.blog.findUnique({
            where: { id },
            include: { author: true },
        });
    })
};

// updated users
const updateBlog = async(id:number,payload:Partial<Blog>)=>{
  const result = await prisma.blog.update({
    where:{
      id
    },
    data:payload
  })
  return result
}
// delete blog
const deleteBlog = async(id:number)=>{
  const result = await prisma.blog.delete({
    where:{
      id
    }
  })
  return result
}


export const BlogServices ={
    createBlog,
    getAllBlogs,
    getBlogById,
    deleteBlog,
    updateBlog
}