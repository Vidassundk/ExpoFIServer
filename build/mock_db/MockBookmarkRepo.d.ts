import { BookmarkRepo } from "../core/requirements/BookmarkRepo";
import { CourseBookmark } from "../core/entities/CourseBookmark";
export declare class MockBookmarkRepo implements BookmarkRepo {
    bookmarks: CourseBookmark[];
    constructor();
    listBookmarkByUserId(userId: string): Promise<CourseBookmark[]>;
    addBookmark(userId: string, courseId: string): Promise<void>;
    removeBookmark(userId: string, courseId: string): Promise<void>;
    isBookmarked(userId: string, courseId: string): Promise<boolean>;
}
