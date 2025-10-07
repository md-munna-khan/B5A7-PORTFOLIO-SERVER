"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillController = void 0;
const skill_service_1 = require("./skill.service");
// create
const createSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield skill_service_1.SkillService.createSkill(req.body);
        res.status(201).json({ data: result });
    }
    catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
});
// get all users
const getAllSkills = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield skill_service_1.SkillService.getAllSkills();
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// update users
const updateSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield skill_service_1.SkillService.updateSkill(Number(req.params.id), req.body);
    res.json(post);
});
// delete users
const deleteSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield skill_service_1.SkillService.deleteSkill(Number(req.params.id));
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// get user by id users
const getSkillById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield skill_service_1.SkillService.getSkillById(Number(req.params.id));
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.SkillController = {
    createSkill,
    getAllSkills,
    updateSkill,
    deleteSkill,
    getSkillById
};
