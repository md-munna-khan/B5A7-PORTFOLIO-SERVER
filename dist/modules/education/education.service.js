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
exports.EducationService = void 0;
const db_1 = require("../../config/db");
// create
const createEducation = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const createdEducation = yield db_1.prisma.education.create({
        data: payload
    });
    return createdEducation;
});
// get all
const getAllEducation = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.education.findMany({
        select: {
            id: true,
            degree: true,
            description: true,
            institution: true,
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
const updateEducation = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.education.update({
        where: {
            id
        },
        data: payload
    });
    return result;
});
// delete user
const deleteEducation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.education.delete({
        where: {
            id
        }
    });
    return result;
});
// get user by id
const getEducationById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.education.findUnique({
        where: {
            id
        }
    });
    return result;
});
exports.EducationService = {
    createEducation,
    getAllEducation,
    updateEducation,
    deleteEducation,
    getEducationById
};
