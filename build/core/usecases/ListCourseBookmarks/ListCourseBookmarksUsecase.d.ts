import { BookmarkRepo } from "../../requirements/BookmarkRepo";
export declare class ListCourseBookmarksUsecase {
    private bookmarkRepo;
    constructor(bookmarkRepo: BookmarkRepo);
    exec(userId: string): Promise<import("../../entities/CourseBookmark").CourseBookmark[]>;
    addBookmark(userId: string, courseId: string): Promise<void>;
    removeBookmark(userId: string, courseId: string): Promise<void>;
    isBookmarked(userId: string, courseId: string): Promise<boolean>;
}
