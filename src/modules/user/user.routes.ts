import express from "express"
import { UserController } from "./user.controller";
import { multerUpload } from "../../config/multer.config";
const router = express.Router();

router.post(
    "/",
    multerUpload.single("file"),
    UserController.createUser
)
router.get(
    "/",
    UserController.getAllUsers
)
router.patch(
    "/:id",
    UserController.updateUser
)
router.delete(
    "/:id",
    UserController.deleteUser
)

export const userRouter = router