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
exports.MockBookmarkRepo = void 0;
class MockBookmarkRepo {
    constructor() {
        this.bookmarks = [];
        this.bookmarks = [
            { userId: "userId", courseId: "course1", createdAt: new Date() },
        ];
    }
    listBookmarkByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bookmarks.filter((bookmark) => bookmark.userId === userId);
        });
    }
    addBookmark(userId, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            const isAlreadyBookmarked = yield this.isBookmarked(userId, courseId);
            if (!isAlreadyBookmarked) {
                const newBookmark = {
                    userId,
                    courseId,
                    createdAt: new Date(),
                };
                this.bookmarks.push(newBookmark);
            }
        });
    }
    removeBookmark(userId, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.bookmarks = this.bookmarks.filter((bookmark) => !(bookmark.userId === userId && bookmark.courseId === courseId));
        });
    }
    isBookmarked(userId, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bookmarks.some((bookmark) => bookmark.userId === userId && bookmark.courseId === courseId);
        });
    }
}
exports.MockBookmarkRepo = MockBookmarkRepo;
//# sourceMappingURL=MockBookmarkRepo.js.map