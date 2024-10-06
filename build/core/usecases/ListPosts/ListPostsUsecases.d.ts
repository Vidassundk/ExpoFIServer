import { MockPostsRepo } from "../../../mock_db/MockPostsRepo";
export declare class ListPostsUsecase {
    private postsRepo;
    constructor(postsRepo: MockPostsRepo);
    exec(): Promise<{
        id: string;
        userFullName: string;
        description: string;
        postedAt: string;
    }[]>;
}
