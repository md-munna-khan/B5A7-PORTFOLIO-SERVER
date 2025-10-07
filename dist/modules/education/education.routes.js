"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.educationRouter = void 0;
const express_1 = __importDefault(require("express"));
const education_controller_1 = require("./education.controller");
const router = express_1.default.Router();
router.post("/", education_controller_1.EducationController.createEducation);
router.get("/", education_controller_1.EducationController.getAllEducation);
router.get("/:id", education_controller_1.EducationController.getEducationById);
router.patch("/:id", education_controller_1.EducationController.updateEducation);
router.delete("/:id", education_controller_1.EducationController.deleteEducation);
exports.educationRouter = router;
