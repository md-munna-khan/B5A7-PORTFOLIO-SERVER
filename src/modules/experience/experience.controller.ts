import { Request, Response } from "express";
import { ExperienceService } from "./experience.service";


// create
const createExperience= async (req:Request,res:Response)=>{
    try {
      
        const result = await ExperienceService.createExperience(req.body)
        res.status(201).json({data:result})
    } catch (error) {
              res.status(500).send(error)
              console.log(error)
    }
}
// get all users
const  getAllExperience = async (req:Request,res:Response)=>{
    try {
        const result = await ExperienceService.getAllExperience()
        res.status(201).json(result)
    } catch (error) {
              res.status(500).send(error)
    }
}
// update users
const updateExperience= async (req: Request, res: Response) => {
    const post = await ExperienceService.updateExperience(Number(req.params.id), req.body);
    res.json(post);
};
// delete users
const   deleteExperience= async (req:Request,res:Response)=>{
    try {

        const result = await ExperienceService.deleteExperience(Number(req.params.id))
        res.status(201).json(result)
    } catch (error) {
              res.status(500).send(error)
    }
}
// get user by id users
const  getExperienceById = async (req:Request,res:Response)=>{
    try {

        const result = await ExperienceService.getExperienceById(Number(req.params.id))
        res.status(201).json(result)
    } catch (error) {
              res.status(500).send(error)
    }
}

export const ExperienceController={
    createExperience,
    getAllExperience,
    updateExperience,
    deleteExperience,
    getExperienceById
}