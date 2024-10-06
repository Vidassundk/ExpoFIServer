import { BookmarkRepo } from "../core/requirements/BookmarkRepo";
import { CourseBookmark } from "../core/entities/CourseBookmark";

export class MockBookmarkRepo implements BookmarkRepo {
  bookmarks: CourseBookmark[] = [];

  constructor() {
    this.bookmarks = [
      { userId: "userId", courseId: "course1", createdAt: new Date() },
    ];
  }
  async listBookmarkByUserId(userId: string): Promise<CourseBookmark[]> {
    return this.bookmarks.filter((bookmark) => bookmark.userId === userId);
  }

  async addBookmark(userId: string, courseId: string): Promise<void> {
    const isAlreadyBookmarked = await this.isBookmarked(userId, courseId);
    if (!isAlreadyBookmarked) {
      const newBookmark: CourseBookmark = {
        userId,
        courseId,
        createdAt: new Date(),
      };
      this.bookmarks.push(newBookmark);
    }
  }

  async removeBookmark(userId: string, courseId: string): Promise<void> {
    this.bookmarks = this.bookmarks.filter(
      (bookmark) =>
        !(bookmark.userId === userId && bookmark.courseId === courseId)
    );
  }

  async isBookmarked(userId: string, courseId: string): Promise<boolean> {
    return this.bookmarks.some(
      (bookmark) => bookmark.userId === userId && bookmark.courseId === courseId
    );
  }
}
