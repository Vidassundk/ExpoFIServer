import { BookmarkRepo } from "../../requirements/BookmarkRepo";

export class ListCourseBookmarksUsecase {
  constructor(private bookmarkRepo: BookmarkRepo) {}

  // Method to list bookmarks by user
  async exec(userId: string) {
    return await this.bookmarkRepo.listBookmarkByUserId(userId);
  }

  // Method to add a bookmark
  async addBookmark(userId: string, courseId: string) {
    await this.bookmarkRepo.addBookmark(userId, courseId);
  }

  // Method to remove a bookmark
  async removeBookmark(userId: string, courseId: string) {
    await this.bookmarkRepo.removeBookmark(userId, courseId);
  }

  // Method to check if a course is bookmarked by a user
  async isBookmarked(userId: string, courseId: string) {
    return await this.bookmarkRepo.isBookmarked(userId, courseId);
  }
}
