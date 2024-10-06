import { MockPostsRepo } from "../../../mock_db/MockPostsRepo";

export class ListPostsUsecase {
  constructor(private postsRepo: MockPostsRepo) {}

  async exec() {
    return this.postsRepo.getPosts();
  }
}
