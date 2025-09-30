import { Request, Response } from "express";
import { UserService } from "./user.service";
import { deleteImageFromCloudinary } from "../../config/cloudinary.config";
// create
const createUser = async (req:Request,res:Response)=>{
    try {
          const bodyData = req.body.data ? JSON.parse(req.body.data) : req.body;
        const payload={
            ...bodyData,
            picture:req.file?.path
        }
        const result = await UserService.createUser(payload)
        res.status(201).json({data:result})
    } catch (error) {
              res.status(500).send(error)
              console.log(error)
    }
}
// get all users
const   getAllUsers= async (req:Request,res:Response)=>{
    try {
        const result = await UserService.  getAllUsers()
        res.status(201).json(result)
    } catch (error) {
              res.status(500).send(error)
    }
}
// update users
const   updateUser= async (req:Request,res:Response)=>{
    try {
const id = Number(req.params.id);
const existingUser = await UserService.getUserById(id)

   if (req.file && existingUser?.picture) {
      await deleteImageFromCloudinary(existingUser.picture);
    }
     const bodyData = req.body.data ? JSON.parse(req.body.data) : req.body;
        const payload={
            ...bodyData,
            picture:req.file?.path
        }
        const result = await UserService.updateUser(Number(req.params.id),payload)
        res.status(201).json(result)
    } catch (error) {
              res.status(500).send(error)
    }
}
// delete users
const   deleteUser = async (req:Request,res:Response)=>{
    try {

        const result = await UserService.deleteUser(Number(req.params.id))
        res.status(201).json(result)
    } catch (error) {
              res.status(500).send(error)
    }
}
// get user by id users
const   getUserById= async (req:Request,res:Response)=>{
    try {

        const result = await UserService.getUserById(Number(req.params.id))
        res.status(201).json(result)
    } catch (error) {
              res.status(500).send(error)
    }
}

export const UserController={
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
    getUserById
}