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
exports.UserController = void 0;
const user_service_1 = require("./user.service");
const cloudinary_config_1 = require("../../config/cloudinary.config");
// create
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const bodyData = req.body.data ? JSON.parse(req.body.data) : req.body;
        const payload = Object.assign(Object.assign({}, bodyData), { picture: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path });
        const result = yield user_service_1.UserService.createUser(payload);
        res.status(201).json({ data: result });
    }
    catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
});
// get all users
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.getAllUsers();
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// update users
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = Number(req.params.id);
        const existingUser = yield user_service_1.UserService.getUserById(id);
        if (req.file && (existingUser === null || existingUser === void 0 ? void 0 : existingUser.picture)) {
            yield (0, cloudinary_config_1.deleteImageFromCloudinary)(existingUser.picture);
        }
        const bodyData = req.body.data ? JSON.parse(req.body.data) : req.body;
        const payload = Object.assign(Object.assign({}, bodyData), { picture: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path });
        const result = yield user_service_1.UserService.updateUser(Number(req.params.id), payload);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// delete users
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.deleteUser(Number(req.params.id));
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// get user by id users
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.getUserById(Number(req.params.id));
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.UserController = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
    getUserById
};
