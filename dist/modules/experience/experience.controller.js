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
exports.ExperienceController = void 0;
const experience_service_1 = require("./experience.service");
// create
const createExperience = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield experience_service_1.ExperienceService.createExperience(req.body);
        res.status(201).json({ data: result });
    }
    catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
});
// get all users
const getAllExperience = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield experience_service_1.ExperienceService.getAllExperience();
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// update users
const updateExperience = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield experience_service_1.ExperienceService.updateExperience(Number(req.params.id), req.body);
    res.json(post);
});
// delete users
const deleteExperience = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield experience_service_1.ExperienceService.deleteExperience(Number(req.params.id));
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// get user by id users
const getExperienceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield experience_service_1.ExperienceService.getExperienceById(Number(req.params.id));
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.ExperienceController = {
    createExperience,
    getAllExperience,
    updateExperience,
    deleteExperience,
    getExperienceById
};
