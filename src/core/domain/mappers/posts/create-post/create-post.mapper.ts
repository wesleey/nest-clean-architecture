import { Mapper } from '@/core/base/mapper';
import { PostEntity } from '@/core/domain/entities/post.entity';
import { CreatePostDto } from '@/shared/dtos/posts/create-post.dto';

export class CreatePostMapper extends Mapper<CreatePostDto, PostEntity> {
  public mapFrom(data: CreatePostDto): PostEntity {
    const post = new PostEntity();

    post.title = data.title;
    post.content = data.content;
    post.userId = data.userId;

    return post;
  }

  public mapTo(data: PostEntity): CreatePostDto {
    const post = new CreatePostDto();

    post.id = data.id;
    post.title = data.title;
    post.content = data.content;
    post.userId = data.userId;

    return post;
  }
}
