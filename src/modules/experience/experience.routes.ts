import express from "express"
import { ExperienceController } from "./experience.controller";



const router = express.Router();

router.post(
    "/",
    ExperienceController.createExperience
)
router.get(
    "/",
        ExperienceController.getAllExperience
)
router.get(
    "/:id",
   ExperienceController.getExperienceById
)
router.patch(
    "/:id",
    
       ExperienceController.updateExperience
)
router.delete(
    "/:id",
   ExperienceController.deleteExperience
)

export const experienceRouter = router