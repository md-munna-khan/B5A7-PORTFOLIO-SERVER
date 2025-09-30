import { Request, Response } from "express";
import { EducationService } from "./education.service";

// create
const createEducation= async (req:Request,res:Response)=>{
    try {
      
        const result = await EducationService.createEducation(req.body)
        res.status(201).json({data:result})
    } catch (error) {
              res.status(500).send(error)
              console.log(error)
    }
}
// get all users
const  getAllEducation = async (req:Request,res:Response)=>{
    try {
        const result = await EducationService.getAllEducation()
        res.status(201).json(result)
    } catch (error) {
              res.status(500).send(error)
    }
}
// update users
const updateEducation= async (req: Request, res: Response) => {
    const post = await EducationService.updateEducation(Number(req.params.id), req.body);
    res.json(post);
};
// delete users
const   deleteEducation = async (req:Request,res:Response)=>{
    try {

        const result = await EducationService.deleteEducation(Number(req.params.id))
        res.status(201).json(result)
    } catch (error) {
              res.status(500).send(error)
    }
}
// get user by id users
const  getEducationById= async (req:Request,res:Response)=>{
    try {

        const result = await EducationService.getEducationById(Number(req.params.id))
        res.status(201).json(result)
    } catch (error) {
              res.status(500).send(error)
    }
}

export const EducationController={
    createEducation,
    getAllEducation,
    updateEducation,
    deleteEducation,
    getEducationById
}