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
exports.ProjectController = void 0;
const cloudinary_config_1 = require("../../config/cloudinary.config");
const project_service_1 = require("./project.service");
// create
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const bodyData = req.body.data ? JSON.parse(req.body.data) : req.body;
        const payload = Object.assign(Object.assign({}, bodyData), { authorId: parseInt(req.body.authorId), tags: req.body.tags ? JSON.parse(req.body.tags) : [], isFeatured: req.body.isFeatured === "true", thumbnail: ((_a = req.file) === null || _a === void 0 ? void 0 : _a.path) || null });
        const result = yield project_service_1.ProjectServices.createProject(payload);
        res.status(201).json({ data: result });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// get all
const getAllProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const search = req.query.search || "";
        const isFeatured = req.query.isFeatured ? req.query.isFeatured === "true" : undefined;
        const tags = req.query.tags ? req.query.tags.split(",") : [];
        const result = yield project_service_1.ProjectServices.getAllProjects({ page, limit, search, isFeatured, tags });
        res.json(result);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch posts", details: err });
    }
});
// get by id
const getProjectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield project_service_1.ProjectServices.getProjectById(Number(req.params.id));
    if (!post)
        return res.status(404).json({ error: "Post not found" });
    res.json(post);
});
// update 
const updateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = Number(req.params.id);
        const existingUser = yield project_service_1.ProjectServices.getProjectById(id);
        if (req.file && (existingUser === null || existingUser === void 0 ? void 0 : existingUser.thumbnail)) {
            yield (0, cloudinary_config_1.deleteImageFromCloudinary)(existingUser.thumbnail);
        }
        const bodyData = req.body.data ? JSON.parse(req.body.data) : req.body;
        const payload = Object.assign(Object.assign({}, bodyData), { authorId: parseInt(req.body.authorId), tags: req.body.tags ? JSON.parse(req.body.tags) : [], isFeatured: req.body.isFeatured === "true", thumbnail: ((_a = req.file) === null || _a === void 0 ? void 0 : _a.path) || null });
        const result = yield project_service_1.ProjectServices.updateProject(Number(req.params.id), payload);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// delete 
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield project_service_1.ProjectServices.deleteProject(Number(req.params.id));
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.ProjectController = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject
};
