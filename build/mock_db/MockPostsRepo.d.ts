export declare class MockPostsRepo {
    posts: {
        id: string;
        userFullName: string;
        description: string;
        postedAt: string;
    }[];
    constructor();
    getPosts(): Promise<{
        id: string;
        userFullName: string;
        description: string;
        postedAt: string;
    }[]>;
}
