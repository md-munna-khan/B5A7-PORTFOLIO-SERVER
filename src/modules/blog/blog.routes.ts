import express from "express"

import { multerUpload } from "../../config/multer.config";
import { BlogController } from "./blog.controller";
const router = express.Router();

router.post(
    "/",
    multerUpload.single("file"),
    BlogController.createBlog
)
router.get(
    "/",
    BlogController.getAllBlogs
)
// router.get(
//     "/:id",
//     UserController.getUserById
// )
// router.patch(
//     "/:id",
//      multerUpload.single("file"),
//     UserController.updateUser
// )
// router.delete(
//     "/:id",
//     UserController.deleteUser
// )

export const blogRouter = router