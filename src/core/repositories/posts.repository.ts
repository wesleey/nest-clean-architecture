import { Repository } from '@/core/base/repository';
import { PostEntity } from '@/core/domain/entities/post.entity';

export abstract class PostsRepository extends Repository<PostEntity> {}
