import {  Prisma, Project } from "@prisma/client";
import { prisma } from "../../config/db";


// create
const createProject= async (payload:Prisma.ProjectCreateInput):Promise<Project> =>{
const result = await prisma.project.create({
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
// get all projects
const getAllProjects = async ({
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

    const result = await prisma.project.findMany({
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

    const total = await prisma.project.count({ where })

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

// get project by id
const getProjectById = async (id: number) => {
    return await prisma.$transaction(async (tx) => {
        await tx.project.update({
            where: { id },
            data: {
                views: {
                    increment: 1
                }
            }
        });

        return await tx.project.findUnique({
            where: { id },
            include: { author: true },
        });
    })
};

// updated users
const updateProject = async(id:number,payload:Partial<Project>)=>{
  const result = await prisma.project.update({
    where:{
      id
    },
    data:payload
  })
  return result
}
// delete project
const deleteProject = async(id:number)=>{
  const result = await prisma.project.delete({
    where:{
      id
    }
  })
  return result
}


export const ProjectServices ={
    createProject,
    getAllProjects,
    getProjectById,
    deleteProject,
    updateProject
}