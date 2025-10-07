"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillRouter = void 0;
const express_1 = __importDefault(require("express"));
const skill_controller_1 = require("./skill.controller");
const router = express_1.default.Router();
router.post("/", skill_controller_1.SkillController.createSkill);
router.get("/", skill_controller_1.SkillController.getAllSkills);
router.get("/:id", skill_controller_1.SkillController.getSkillById);
router.patch("/:id", skill_controller_1.SkillController.updateSkill);
router.delete("/:id", skill_controller_1.SkillController.deleteSkill);
exports.skillRouter = router;
