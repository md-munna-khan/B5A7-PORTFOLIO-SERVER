import { Education, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";


// create
const createEducation= async (payload:Prisma.EducationCreateInput):Promise<Education> =>{

  const createdEducation =await prisma.education.create({
    data:payload
  })

  return createdEducation
}

// get all

const getAllEducation = async ()=>{
  const result = await prisma.education.findMany({
    select:{
          id: true,
          degree:true,
          description:true,
          institution:true,
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
const updateEducation = async(id:number,payload:Partial<Education>)=>{
  const result = await prisma.education.update({
    where:{
      id
    },
    data:payload
  })
  return result
}
// delete user
const deleteEducation = async(id:number)=>{
  const result = await prisma.education.delete({
    where:{
      id
    }
  })
  return result
}
// get user by id
const getEducationById = async(id:number)=>{
  const result = await prisma.education.findUnique({
    where:{
      id
    }
  })
  return result
}
export const EducationService={
  createEducation,
  getAllEducation,
  updateEducation,
  deleteEducation,
  getEducationById
}