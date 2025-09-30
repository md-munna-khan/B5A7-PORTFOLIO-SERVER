import { Prisma, Skill } from "@prisma/client";
import { prisma } from "../../config/db";


// create
const createSkill= async (payload:Prisma.SkillCreateInput):Promise<Skill> =>{

  const createdUser =await prisma.skill.create({
    data:payload
  })

  return createdUser
}

// get all

const getAllSkills = async ()=>{
  const result = await prisma.skill.findMany({
    select:{
          id: true,
            name: true,
           category:true,
           level:true,
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
const updateSkill = async(id:number,payload:Partial<Skill>)=>{
  const result = await prisma.skill.update({
    where:{
      id
    },
    data:payload
  })
  return result
}
// delete user
const deleteSkill = async(id:number)=>{
  const result = await prisma.skill.delete({
    where:{
      id
    }
  })
  return result
}
// get user by id
const getSkillById = async(id:number)=>{
  const result = await prisma.skill.findUnique({
    where:{
      id
    }
  })
  return result
}
export const SkillService={
  createSkill,
  getAllSkills,
  updateSkill,
  deleteSkill,
  getSkillById
}