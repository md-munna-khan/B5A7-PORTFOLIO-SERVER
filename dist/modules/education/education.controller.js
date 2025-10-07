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
exports.EducationController = void 0;
const education_service_1 = require("./education.service");
// create
const createEducation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield education_service_1.EducationService.createEducation(req.body);
        res.status(201).json({ data: result });
    }
    catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
});
// get all users
const getAllEducation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield education_service_1.EducationService.getAllEducation();
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// update users
const updateEducation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield education_service_1.EducationService.updateEducation(Number(req.params.id), req.body);
    res.json(post);
});
// delete users
const deleteEducation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield education_service_1.EducationService.deleteEducation(Number(req.params.id));
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// get user by id users
const getEducationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield education_service_1.EducationService.getEducationById(Number(req.params.id));
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.EducationController = {
    createEducation,
    getAllEducation,
    updateEducation,
    deleteEducation,
    getEducationById
};
