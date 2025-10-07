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
exports.ExperienceService = void 0;
const db_1 = require("../../config/db");
// create
const createExperience = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const createdExperience = yield db_1.prisma.experience.create({
        data: payload
    });
    return createdExperience;
});
// get all
const getAllExperience = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.experience.findMany({
        select: {
            id: true,
            company: true,
            position: true,
            isCurrent: true,
            description: true,
            createdAt: true,
            updatedAt: true,
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    return result;
});
// updated users
const updateExperience = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.experience.update({
        where: {
            id
        },
        data: payload
    });
    return result;
});
// delete user
const deleteExperience = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.experience.delete({
        where: {
            id
        }
    });
    return result;
});
// get user by id
const getExperienceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.experience.findUnique({
        where: {
            id
        }
    });
    return result;
});
exports.ExperienceService = {
    createExperience,
    getAllExperience,
    updateExperience,
    deleteExperience,
    getExperienceById
};
