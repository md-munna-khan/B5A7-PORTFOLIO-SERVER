import {  Experience, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";


// create
const createExperience= async (payload:Prisma.ExperienceCreateInput):Promise<Experience> =>{

  const createdExperience =await prisma.experience.create({
    data:payload
  })

  return  createdExperience
}

// get all

const getAllExperience = async ()=>{
  const result = await prisma.experience.findMany({
    select:{
          id: true,
          company:true,
          position:true,
          isCurrent:true,
          description:true,
            createdAt: true,
            updatedAt: true,
    },
    orderBy:{
      createdAt:"desc"
    }
  })
  return result
}
// updated users
const updateExperience = async(id:number,payload:Partial<Experience>)=>{
  const result = await prisma.experience.update({
    where:{
      id
    },
    data:payload
  })
  return result
}
// delete user
const deleteExperience = async(id:number)=>{
  const result = await prisma.experience.delete({
    where:{
      id
    }
  })
  return result
}
// get user by id
const getExperienceById = async(id:number)=>{
  const result = await prisma.experience.findUnique({
    where:{
      id
    }
  })
  return result
}
export const ExperienceService={
  createExperience,
  getAllExperience,
  updateExperience,
  deleteExperience,
  getExperienceById
}