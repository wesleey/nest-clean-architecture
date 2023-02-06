import { Mapper } from '@/core/base/mapper';
import { PostEntity } from '@/core/domain/entities/post.entity';
import { CreatedPostDto } from '@/shared/dtos/posts/created-post.dto';

export class CreatedPostMapper implements Mapper<CreatedPostDto, PostEntity> {
  public mapFrom(data: CreatedPostDto): PostEntity {
    const post = new PostEntity();

    post.id = data.id;
    post.title = data.title;
    post.content = data.content;
    post.userId = data.userId;

    return post;
  }

  public mapTo(data: PostEntity): CreatedPostDto {
    const post = new CreatedPostDto();

    post.id = data.id;
    post.title = data.title;
    post.content = data.content;
    post.userId = data.userId;

    return post;
  }
}
