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
exports.SkillService = void 0;
const db_1 = require("../../config/db");
// create
const createSkill = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const createdUser = yield db_1.prisma.skill.create({
        data: payload
    });
    return createdUser;
});
// get all
const getAllSkills = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.skill.findMany({
        select: {
            id: true,
            name: true,
            category: true,
            level: true,
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
const updateSkill = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.skill.update({
        where: {
            id
        },
        data: payload
    });
    return result;
});
// delete user
const deleteSkill = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.skill.delete({
        where: {
            id
        }
    });
    return result;
});
// get user by id
const getSkillById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.skill.findUnique({
        where: {
            id
        }
    });
    return result;
});
exports.SkillService = {
    createSkill,
    getAllSkills,
    updateSkill,
    deleteSkill,
    getSkillById
};
