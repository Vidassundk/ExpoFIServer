import { BookmarkRepo } from "../core/requirements/BookmarkRepo";
import { CourseRepo } from "../core/requirements/CourseRepo";
import { MockBookmarkRepo } from "./MockBookmarkRepo";
import { MockCourseRepo } from "./MockCourseRepo";
import { randImg } from "@ngneat/falso";

const initialCourses = [
  {
    id: "courseId0",
    name: "Personal Finance",
    description: "Learn how to manage your personal finance",
    lessons: [
      {
        id: "courseId0_lessonId0",
        name: "Introduction to Personal Finance",
        duration: 3_600,
      },
      {
        id: "courseId0_lessonId1",
        name: "Budgeting",
        duration: 4_800,
      },
    ],
    coverImage: randImg({ width: 200, height: 200 }),
  },
  {
    id: "courseId1",
    name: "Intro to investing",
    description: "Learn how to invest in the stock market",
    lessons: [
      {
        id: "courseId1_lessonId0",
        name: "What is a stock?",
        duration: 1_800,
      },
      {
        id: "courseId1_lessonId1",
        name: "What is a bond?",
        duration: 2_400,
      },
      {
        id: "courseId1_lessonId1",
        name: "What is the stock market?",
        duration: 3_600,
      },
    ],
    coverImage: randImg({ width: 200, height: 200 }),
  },
  {
    id: "courseId2",
    name: "Budgeting",
    description: "Learn how to budget",
    lessons: [
      {
        id: "courseId2_lessonId0",
        name: "What is a budget?",
        duration: 1_800,
      },
      {
        id: "courseId2_lessonId1",
        name: "3 rules of budgeting",
        duration: 2_400,
      },
      {
        id: "courseId2_lessonId1",
        name: "How to budget?",
        duration: 7_200,
      },
    ],
    coverImage: randImg({ width: 200, height: 200 }),
  },
  {
    id: "courseId3",
    name: "Retirement",
    description: "Learn how to retire",
    lessons: [
      {
        id: "courseId3_lessonId0",
        name: "What is retirement?",
        duration: 1_800,
      },
      {
        id: "courseId3_lessonId1",
        name: "How to retire?",
        duration: 4_800,
      },
    ],
    coverImage: randImg({ width: 200, height: 200 }),
  },
];

export class MockRepos {
  bookmarks: BookmarkRepo;
  courses: CourseRepo;

  constructor() {
    this.bookmarks = new MockBookmarkRepo();
    this.courses = new MockCourseRepo(initialCourses);
  }
}
