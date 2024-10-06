"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockRepos = void 0;
const MockBookmarkRepo_1 = require("./MockBookmarkRepo");
const MockCourseRepo_1 = require("./MockCourseRepo");
const falso_1 = require("@ngneat/falso");
const initialCourses = [
    {
        id: "courseId0",
        name: "Personal Finance",
        description: "Learn how to manage your personal finance",
        lessons: [
            {
                id: "courseId0_lessonId0",
                name: "Introduction to Personal Finance",
                duration: 3600,
            },
            {
                id: "courseId0_lessonId1",
                name: "Budgeting",
                duration: 4800,
            },
        ],
        coverImage: (0, falso_1.randImg)({ width: 200, height: 200 }),
    },
    {
        id: "courseId1",
        name: "Intro to investing",
        description: "Learn how to invest in the stock market",
        lessons: [
            {
                id: "courseId1_lessonId0",
                name: "What is a stock?",
                duration: 1800,
            },
            {
                id: "courseId1_lessonId1",
                name: "What is a bond?",
                duration: 2400,
            },
            {
                id: "courseId1_lessonId1",
                name: "What is the stock market?",
                duration: 3600,
            },
        ],
        coverImage: (0, falso_1.randImg)({ width: 200, height: 200 }),
    },
    {
        id: "courseId2",
        name: "Budgeting",
        description: "Learn how to budget",
        lessons: [
            {
                id: "courseId2_lessonId0",
                name: "What is a budget?",
                duration: 1800,
            },
            {
                id: "courseId2_lessonId1",
                name: "3 rules of budgeting",
                duration: 2400,
            },
            {
                id: "courseId2_lessonId1",
                name: "How to budget?",
                duration: 7200,
            },
        ],
        coverImage: (0, falso_1.randImg)({ width: 200, height: 200 }),
    },
    {
        id: "courseId3",
        name: "Retirement",
        description: "Learn how to retire",
        lessons: [
            {
                id: "courseId3_lessonId0",
                name: "What is retirement?",
                duration: 1800,
            },
            {
                id: "courseId3_lessonId1",
                name: "How to retire?",
                duration: 4800,
            },
        ],
        coverImage: (0, falso_1.randImg)({ width: 200, height: 200 }),
    },
];
class MockRepos {
    constructor() {
        this.bookmarks = new MockBookmarkRepo_1.MockBookmarkRepo();
        this.courses = new MockCourseRepo_1.MockCourseRepo(initialCourses);
    }
}
exports.MockRepos = MockRepos;
//# sourceMappingURL=MockRepos.js.map