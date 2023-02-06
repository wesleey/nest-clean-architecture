import { UseCase } from '@/core/base/use-case';
import { CreatePostMapper } from '@/core/domain/mappers/posts/create-post';
import { CreatedPostMapper } from '@/core/domain/mappers/posts/created-post';
import { PostsRepository } from '@/core/repositories/posts.repository';
import { CreatePostDto } from '@/shared/dtos/posts/create-post.dto';
import { CreatedPostDto } from '@/shared/dtos/posts/created-post.dto';

export class CreatePostUseCase implements UseCase<CreatedPostDto> {
  private createPostMapper: CreatePostMapper;
  private createdPostMapper: CreatedPostMapper;

  constructor(private readonly repository: PostsRepository) {
    this.createPostMapper = new CreatePostMapper();
    this.createdPostMapper = new CreatedPostMapper();
  }

  public async execute(post: CreatePostDto): Promise<CreatedPostDto> {
    const entity = this.createPostMapper.mapFrom(post);
    const createdPost = await this.repository.create(entity);
    return this.createdPostMapper.mapTo(createdPost);
  }
}
