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
exports.MockPostsRepo = void 0;
class MockPostsRepo {
    constructor() {
        this.posts = [
            {
                id: "post1",
                userFullName: "John Doe",
                description: "This is a sample post.",
                postedAt: new Date("2023-10-01T08:00:00Z").toISOString(),
            },
            {
                id: "post2",
                userFullName: "Jane Smith",
                description: "This is another sample post.",
                postedAt: new Date("2023-10-02T08:00:00Z").toISOString(),
            },
        ];
        const startDate = new Date("2023-10-01T08:00:00Z");
        const firstNames = [
            "John",
            "Jane",
            "Alex",
            "Chris",
            "Emily",
            "Michael",
            "Sarah",
            "David",
            "Laura",
            "Daniel",
            "Sophia",
            "Jacob",
            "Olivia",
            "James",
            "Emma",
            "Liam",
            "Isabella",
            "Ethan",
            "Mia",
            "Noah",
        ];
        const lastNames = [
            "Doe",
            "Smith",
            "Johnson",
            "Lee",
            "Williams",
            "Brown",
            "Jones",
            "Garcia",
            "Miller",
            "Davis",
            "Rodriguez",
            "Martinez",
            "Hernandez",
            "Lopez",
            "Gonzalez",
            "Wilson",
            "Anderson",
            "Thomas",
            "Taylor",
            "Moore",
        ];
        const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
        for (let i = 3; i <= 40; i++) {
            const postDate = new Date(startDate);
            postDate.setDate(startDate.getDate() + i - 1);
            const userFullName = `${getRandomElement(firstNames)} ${getRandomElement(lastNames)}`;
            this.posts.push({
                id: `post${i}`,
                userFullName,
                description: `This is a generated post number ${i}.`,
                postedAt: postDate.toISOString(),
            });
        }
    }
    getPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.posts;
        });
    }
}
exports.MockPostsRepo = MockPostsRepo;
//# sourceMappingURL=MockPostsRepo.js.map