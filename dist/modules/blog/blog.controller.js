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
exports.BlogController = void 0;
const blog_service_1 = require("./blog.service");
const cloudinary_config_1 = require("../../config/cloudinary.config");
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const bodyData = req.body.data ? JSON.parse(req.body.data) : req.body;
        const payload = Object.assign(Object.assign({}, bodyData), { authorId: parseInt(req.body.authorId), tags: req.body.tags ? JSON.parse(req.body.tags) : [], isFeatured: req.body.isFeatured === "true", thumbnail: ((_a = req.file) === null || _a === void 0 ? void 0 : _a.path) || null });
        const result = yield blog_service_1.BlogServices.createBlog(payload);
        res.status(201).json({ data: result });
    }
    catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
});
const getAllBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const search = req.query.search || "";
        const isFeatured = req.query.isFeatured ? req.query.isFeatured === "true" : undefined;
        const tags = req.query.tags ? req.query.tags.split(",") : [];
        const result = yield blog_service_1.BlogServices.getAllBlogs({ page, limit, search, isFeatured, tags });
        res.json(result);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch posts", details: err });
    }
});
// get blog by id
const getBlogById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield blog_service_1.BlogServices.getBlogById(Number(req.params.id));
    if (!post)
        return res.status(404).json({ error: "Post not found" });
    res.json(post);
});
// update users
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = Number(req.params.id);
        const existingBlog = yield blog_service_1.BlogServices.getBlogById(id);
        if (!existingBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        if (req.file && (existingBlog === null || existingBlog === void 0 ? void 0 : existingBlog.thumbnail)) {
            yield (0, cloudinary_config_1.deleteImageFromCloudinary)(existingBlog.thumbnail);
        }
        const bodyData = req.body.data ? JSON.parse(req.body.data) : req.body;
        const payload = Object.assign(Object.assign({}, bodyData), { authorId: parseInt(req.body.authorId), tags: req.body.tags ? JSON.parse(req.body.tags) : [], isFeatured: req.body.isFeatured === "true", thumbnail: ((_a = req.file) === null || _a === void 0 ? void 0 : _a.path) || existingBlog.thumbnail });
        // ✅ update call
        const result = yield blog_service_1.BlogServices.updateBlog(id, payload);
        return res.status(200).json({
            success: true,
            message: "📝 Blog updated successfully!",
            data: result,
        });
    }
    catch (error) {
        console.error("Blog update error:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong during blog update",
            error,
        });
    }
});
// delete users
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield blog_service_1.BlogServices.deleteBlog(Number(req.params.id));
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.BlogController = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
};
