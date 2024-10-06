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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ListCoursesUsecase_1 = require("./core/usecases/ListCourses/ListCoursesUsecase");
const MockRepos_1 = require("./mock_db/MockRepos");
const ListCourseBookmarksUsecase_1 = require("./core/usecases/ListCourseBookmarks/ListCourseBookmarksUsecase");
const MockPostsRepo_1 = require("./mock_db/MockPostsRepo");
const ListPostsUsecases_1 = require("./core/usecases/ListPosts/ListPostsUsecases");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
const mockRepos = new MockRepos_1.MockRepos();
const mockPostsRepo = new MockPostsRepo_1.MockPostsRepo();
const listCoursesUsecase = new ListCoursesUsecase_1.ListCoursesUsecase(mockRepos.courses);
const listCourseBookmarksUsecase = new ListCourseBookmarksUsecase_1.ListCourseBookmarksUsecase(mockRepos.bookmarks);
const listPostsUsecase = new ListPostsUsecases_1.ListPostsUsecase(mockPostsRepo);
app.get("/info", (_req, res) => {
    return res.send({
        name: "Octopus Backend",
        version: "1.0.0",
    });
});
app.get("/courses", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courses = yield listCoursesUsecase.exec();
    return res.send(courses);
}));
app.get("/bookmarks", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = "userId";
    const courseBookmarks = yield listCourseBookmarksUsecase.exec(userId);
    return res.send(courseBookmarks);
}));
app.post("/bookmarks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, courseId } = req.body;
    if (!userId || !courseId) {
        return res.status(400).send({ error: "userId and courseId are required" });
    }
    try {
        yield listCourseBookmarksUsecase.addBookmark(userId, courseId);
        return res.status(201).send({ message: "Bookmark added successfully" });
    }
    catch (error) {
        return res.status(500).send({ error: "Failed to add bookmark" });
    }
}));
app.delete("/bookmarks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, courseId } = req.body;
    if (!userId || !courseId) {
        return res.status(400).send({ error: "userId and courseId are required" });
    }
    try {
        yield listCourseBookmarksUsecase.removeBookmark(userId, courseId);
        return res.status(200).send({ message: "Bookmark removed successfully" });
    }
    catch (error) {
        return res.status(500).send({ error: "Failed to remove bookmark" });
    }
}));
app.get("/bookmarks/check", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, courseId } = req.query;
    if (!userId || !courseId) {
        return res.status(400).send({ error: "userId and courseId are required" });
    }
    try {
        const isBookmarked = yield listCourseBookmarksUsecase.isBookmarked(userId, courseId);
        return res.status(200).send({ isBookmarked });
    }
    catch (error) {
        return res.status(500).send({ error: "Failed to check bookmark status" });
    }
}));
app.get("/posts", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield listPostsUsecase.exec();
    return res.send(posts);
}));
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map