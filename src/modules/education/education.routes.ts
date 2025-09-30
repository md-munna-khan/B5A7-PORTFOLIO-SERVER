import express from "express"

import { multerUpload } from "../../config/multer.config";
import { EducationController } from "./education.controller";

const router = express.Router();

router.post(
    "/",
    EducationController.createEducation
)
router.get(
    "/",
        EducationController.getAllEducation
)
router.get(
    "/:id",
   EducationController.getEducationById
)
router.patch(
    "/:id",
    
       EducationController.updateEducation
)
router.delete(
    "/:id",
   EducationController.deleteEducation
)

export const educationRouter = router