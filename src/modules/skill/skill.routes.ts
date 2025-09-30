import express from "express"


import { SkillController } from "./skill.controller";
const router = express.Router();

router.post(
    "/",
    SkillController.createSkill
)
router.get(
    "/",
      SkillController.getAllSkills
)
router.get(
    "/:id",
 SkillController.getSkillById
)
router.patch(
    "/:id",
   
     SkillController.updateSkill
)
router.delete(
    "/:id",
     SkillController.deleteSkill
)

export const skillRouter = router