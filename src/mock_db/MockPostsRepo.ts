export class MockPostsRepo {
  posts = [
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

  constructor() {
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

    const getRandomElement = (arr: string[]) =>
      arr[Math.floor(Math.random() * arr.length)];

    for (let i = 3; i <= 40; i++) {
      const postDate = new Date(startDate);
      postDate.setDate(startDate.getDate() + i - 1);

      const userFullName = `${getRandomElement(firstNames)} ${getRandomElement(
        lastNames
      )}`;

      this.posts.push({
        id: `post${i}`,
        userFullName,
        description: `This is a generated post number ${i}.`,
        postedAt: postDate.toISOString(),
      });
    }
  }

  async getPosts() {
    return this.posts;
  }
}
