import { UseCase } from '@/core/base/use-case';
import { CreatedPostMapper } from '@/core/domain/mappers/posts/created-post';
import { PostsRepository } from '@/core/repositories/posts.repository';
import { CreatedPostDto } from '@/shared/dtos/posts/created-post.dto';

export class FindAllPostsUseCase implements UseCase<CreatedPostDto[]> {
  private createdPostMapper: CreatedPostMapper;

  constructor(private readonly repository: PostsRepository) {
    this.createdPostMapper = new CreatedPostMapper();
  }

  public async execute(): Promise<CreatedPostDto[]> {
    const posts = await this.repository.findAll();
    return posts.map((post) => this.createdPostMapper.mapTo(post));
  }
}
