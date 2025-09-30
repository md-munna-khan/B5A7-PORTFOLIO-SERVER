import { Request, Response } from "express";


import { SkillService } from "./skill.service";
// create
const createSkill= async (req:Request,res:Response)=>{
    try {
      
        const result = await SkillService.createSkill(req.body)
        res.status(201).json({data:result})
    } catch (error) {
              res.status(500).send(error)
              console.log(error)
    }
}
// get all users
const  getAllSkills = async (req:Request,res:Response)=>{
    try {
        const result = await SkillService.getAllSkills()
        res.status(201).json(result)
    } catch (error) {
              res.status(500).send(error)
    }
}
// update users
const updateSkill = async (req: Request, res: Response) => {
    const post = await SkillService.updateSkill(Number(req.params.id), req.body);
    res.json(post);
};
// delete users
const   deleteSkill = async (req:Request,res:Response)=>{
    try {

        const result = await SkillService.deleteSkill(Number(req.params.id))
        res.status(201).json(result)
    } catch (error) {
              res.status(500).send(error)
    }
}
// get user by id users
const  getSkillById= async (req:Request,res:Response)=>{
    try {

        const result = await SkillService.getSkillById(Number(req.params.id))
        res.status(201).json(result)
    } catch (error) {
              res.status(500).send(error)
    }
}

export const SkillController={
    createSkill,
    getAllSkills,
    updateSkill,
    deleteSkill,
    getSkillById
}