import { CourseBookmark } from "../entities/CourseBookmark";
export interface BookmarkRepo {
    listBookmarkByUserId(userId: string): Promise<CourseBookmark[]>;
    addBookmark(userId: string, courseId: string): Promise<void>;
    removeBookmark(userId: string, courseId: string): Promise<void>;
    isBookmarked(userId: string, courseId: string): Promise<boolean>;
}
