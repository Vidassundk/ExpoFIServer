import express, { Express, Request, Response } from "express";
import { ListCoursesUsecase } from "./core/usecases/ListCourses/ListCoursesUsecase";
import { MockRepos } from "./mock_db/MockRepos";
import { ListCourseBookmarksUsecase } from "./core/usecases/ListCourseBookmarks/ListCourseBookmarksUsecase";
import { MockPostsRepo } from "./mock_db/MockPostsRepo";
import { ListPostsUsecase } from "./core/usecases/ListPosts/ListPostsUsecases";

const app: Express = express();
const port = 3000;

app.use(express.json());

const mockRepos = new MockRepos();
const mockPostsRepo = new MockPostsRepo();

const listCoursesUsecase = new ListCoursesUsecase(mockRepos.courses);
const listCourseBookmarksUsecase = new ListCourseBookmarksUsecase(
  mockRepos.bookmarks
);
const listPostsUsecase = new ListPostsUsecase(mockPostsRepo);

app.get("/info", (_req: Request, res: Response) => {
  return res.send({
    name: "Octopus Backend",
    version: "1.0.0",
  });
});

app.get("/courses", async (_req: Request, res: Response) => {
  const courses = await listCoursesUsecase.exec();
  return res.send(courses);
});

app.get("/bookmarks", async (_req: Request, res: Response) => {
  const userId = "userId";
  const courseBookmarks = await listCourseBookmarksUsecase.exec(userId);
  return res.send(courseBookmarks);
});

app.post("/bookmarks", async (req: Request, res: Response) => {
  const { userId, courseId } = req.body;

  if (!userId || !courseId) {
    return res.status(400).send({ error: "userId and courseId are required" });
  }

  try {
    await listCourseBookmarksUsecase.addBookmark(userId, courseId);
    return res.status(201).send({ message: "Bookmark added successfully" });
  } catch (error) {
    return res.status(500).send({ error: "Failed to add bookmark" });
  }
});

app.delete("/bookmarks", async (req: Request, res: Response) => {
  const { userId, courseId } = req.body;

  if (!userId || !courseId) {
    return res.status(400).send({ error: "userId and courseId are required" });
  }

  try {
    await listCourseBookmarksUsecase.removeBookmark(userId, courseId);
    return res.status(200).send({ message: "Bookmark removed successfully" });
  } catch (error) {
    return res.status(500).send({ error: "Failed to remove bookmark" });
  }
});

app.get("/bookmarks/check", async (req: Request, res: Response) => {
  const { userId, courseId } = req.query;

  if (!userId || !courseId) {
    return res.status(400).send({ error: "userId and courseId are required" });
  }

  try {
    const isBookmarked = await listCourseBookmarksUsecase.isBookmarked(
      userId as string,
      courseId as string
    );
    return res.status(200).send({ isBookmarked });
  } catch (error) {
    return res.status(500).send({ error: "Failed to check bookmark status" });
  }
});

app.get("/posts", async (_req: Request, res: Response) => {
  const posts = await listPostsUsecase.exec();
  return res.send(posts);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
