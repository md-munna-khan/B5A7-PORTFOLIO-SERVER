import { Prisma, User } from "@prisma/client";
import { prisma } from "../../config/db";

import bcryptjs from "bcryptjs";
import { envVars } from "../../config/env";
// create
const createUser= async (payload:Prisma.UserCreateInput):Promise<User> =>{
  const {password,...rest}=payload;

  
    if (!password) throw new Error("Password is required");

  const hashedPassword=await bcryptjs.hash(password as string,Number(envVars.BCRYPT_SALT_ROUND))
  const createdUser =await prisma.user.create({
    data:{
      ...rest,
      password:hashedPassword
    }
  })

  return createdUser
}

// get all

const getAllUsers = async ()=>{
  const result = await prisma.user.findMany({
    select:{
          id: true,
            name: true,
            email: true,
            password:true,
            phone: true,
            picture: true,
            createdAt: true,
            updatedAt: true,
            role: true,
       
    },
    orderBy:{
      createdAt:"desc"
    }
  })
  return result
}
// updated users
const updateUser = async(id:number,payload:Partial<User>)=>{
  const result = await prisma.user.update({
    where:{
      id
    },
    data:payload
  })
  return result
}
// delete user
const deleteUser = async(id:number)=>{
  const result = await prisma.user.delete({
    where:{
      id
    }
  })
  return result
}
export const UserService={
  createUser,
  getAllUsers,
  updateUser,
  deleteUser
}